import {Youtube} from '../imports/youtube';
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

Meteor.methods({
  'youtube/search/list': Meteor.wrapAsync(function (options, callback) {
    check(options, Object);
    options.part = options.part || 'snippet';

    var clientIp = getUserIp.call(this);
    if (clientIp) {
      options.userIp = clientIp;
    }

    console.log('Youtube.search.list', options);
    Youtube.search.list(options, callback);
  })
});

Meteor.methods({
  'youtube/videos/list': Meteor.wrapAsync(function (options, callback) {
    check(options, Match.ObjectIncluding({
      part: String
    }));

    var clientIp = getUserIp.call(this);
    if (clientIp) {
      options.userIp = clientIp;
    }

    console.log('youtube.videos.list', options);
    Youtube.videos.list(options, callback);
  })
});
