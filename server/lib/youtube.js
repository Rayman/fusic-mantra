import YouTube  from 'youtube-node';

const youTube = new YouTube();
global.YT = youTube;

const YOUTUBE_ACCESS_TOKEN = 'AIzaSyAK-DHrYPbww17dc-dK_HhUwmLhFjMynj0';
youTube.setKey(YOUTUBE_ACCESS_TOKEN);

// Youtube.authenticate({
//   type: "key",
//   key: YOUTUBE_ACCESS_TOKEN
// });

// Youtube.authenticate({
//   type: "key",
//   key: YOUTUBE_ACCESS_TOKEN
// });

// function callYoutubeAPI(module, fn, options) {
//   Youtube[module][fn](options, function (err, data) {
//     console.log('Youtube error:', err);
//   });
// }

// Meteor.methods({
//   youtube_search: function(options) {
//     //get client ip, use it as restriction option to filter available videos for this ip
//     var clientIp  = this.connection.clientAddress;
//     //dont activate restriction for "invalid ip ranges" http://nl.wikipedia.org/wiki/RFC_1918
//     if (clientIp.indexOf("10.") !== 0 &&
//         clientIp.indexOf("192.") !== 0 &&
//         clientIp.indexOf("172.") !== 0 &&
//         clientIp.indexOf("127.0.0.1") !== 0 ) {
//       options.restriction = clientIp;
//     }
//     //first get id's, then fetch additional info using youtube_videos_list method
//     return callYoutubeAPI("search", "list", options);
//   },
//   youtube_videos_list: function(options) {
//     var result = callYoutubeAPI("videos", "list", options);

//     // cache result
//     for (var i=0; i<result.items.length; i++) {
//       var item = result.items[i];

//       assert.equal(item.kind, 'youtube#video');

//       var doc = {
//         _id      : ""+item.id, // convert to string to sanitize input
//         modified : new Date(),
//         etag     : item.etag
//       };
//       if (item.snippet) {
//         doc.snippet        = item.snippet;
//         doc.contentDetails = item.contentDetails;
//         doc.statistics     = item.statistics;

//         var r = Songs.update(
//           { _id: doc._id },
//           doc,
//           { upsert: true }
//         );
//       }
//     }

//     return result;
//   },
// });
