import {Youtube} from '../imports/youtube';
import {Songs} from '/lib/collections';

import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';

// for debugging
global.YT = Youtube;

function getUserIp() {
  var clientIp = this.connection.clientAddress;
  // dont activate restriction for "invalid ip ranges" http://nl.wikipedia.org/wiki/RFC_1918
  if (clientIp.indexOf('10.') !== 0 &&
      clientIp.indexOf('192.') !== 0 &&
      clientIp.indexOf('172.') !== 0 &&
      clientIp.indexOf('127.0.0.1') !== 0) {
    return clientIp;
  }
}

function getYoutubeCall(...names) {
  // get the youtube api function
  let fn = Youtube;
  for (let name of names) {
    fn = fn[name];
  }

  const that = this;
  const logString = names.join('.');

  return function (options, callback) {
    // add userIp for restrictions
    var clientIp = getUserIp.call(that);
    if (clientIp) {
      options.userIp = clientIp;
    }

    fn(options, function (err, result) {
      if (err || !result) {
        console.warn('FAIL', logString, options, err);
      } else {
        console.log('OK', logString, options);
      }
      callback.apply(that, arguments);
    });
  };
}

Meteor.methods({
  'youtube/search/list': Meteor.wrapAsync(function (options, callback) {
    check(options, Object);
    options.part = options.part || 'snippet';

    getYoutubeCall.call(this, 'search', 'list')(options, callback);
  })
});

Meteor.methods({
  'youtube/videos/list': Meteor.wrapAsync(function (options, callback) {
    check(options, Match.ObjectIncluding({
      part: String
    }));

    getYoutubeCall.call(this, 'videos', 'list')(options, callback);
  })
});

Meteor.methods({
  /* eslint quote-props: [2, "consistent"] */
  'youtube_more_info': function (options) {
    check(options,
      Match.ObjectIncluding({
        part: String
      })
    );
    check(options,
      Match.OneOf(
        Match.ObjectIncluding({
          id: String
        }),
        Match.ObjectIncluding({
          chart: String
        })
      )
    );

    const results = Meteor.call('youtube/videos/list', options);

    if (options.part === 'snippet,contentDetails,statistics') {
      console.log('caching the result');

      for (let item of results.items) {
        check(item.kind, 'youtube#video');

        var doc = {
          _id: String(item.id),
          modified: new Date(),
          etag: String(item.etag)
        };
        if (item.snippet) {
          doc.snippet = item.snippet;
          doc.contentDetails = item.contentDetails;
          doc.statistics = item.statistics;

          var r = Songs.update(
            {_id: doc._id},
            doc,
            {upsert: true}
          );
          console.log('updated documents:', r);
        }
      }
    }

    return results;
  }
});
