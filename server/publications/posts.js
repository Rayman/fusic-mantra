import {Playlists} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

Meteor.publish('playlists.newest', function () {
  const selector = {
    privacy: 'public'
  };
  const options = {
    fields: {title: 1, cover: 1, createdAt: 1, owner: 1, privacy: 1, songs: 1},
    sort: {createdAt: -1},
    limit: 10
  };

  return Playlists.find(selector, options);
});

Meteor.publish('playlists.followed', function () {
  const selector = {
    privacy: 'public'
  };
  const options = {
    fields: {title: 1, cover: 1, createdAt: 1, owner: 1, privacy: 1, songs: 1},
    sort: {createdAt: -1}
  };

  return Playlists.find(selector, options);
});

Meteor.publish('playlists.fromUser', function (userId) {
  var fields = {title: 1, cover: 1, createdAt: 1, owner: 1, privacy: 1, songs: 1};
  var filter = {owner: userId};

  // show your own private playlists
  if (this.userId !== userId) {
    filter.privacy = {$ne: 'private'};
  }

  return Playlists.find(
    filter,
    {
      sort: {createdAt: -1},
      fields: fields
    }
  );
});

Meteor.publish('playlists.single', function (playlistId) {
  const selector = {
    _id: playlistId,
    privacy: 'public'
  };
  const options = {
    fields: {_id: 1, title: 1, cover: 1, createdAt: 1}
  };

  return Playlists.find(selector, options);
});
