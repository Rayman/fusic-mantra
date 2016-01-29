import {Playlists} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

Meteor.publish('playlists.list', function () {
  const selector = {
    privacy: 'public'
  };
  const options = {
    fields: {_id: 1, title: 1, cover: 1, createdAt: 1},
    sort: {createdAt: -1},
    limit: 10
  };

  return Playlists.find(selector, options);
});
