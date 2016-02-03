import {Radios} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('radios.newest', function () {
  const selector = {
    privacy: 'public'
  };
  const options = {
    fields: {title: 1, cover: 1, createdAt: 1, owner: 1, privacy: 1, songs: 1},
    sort: {createdAt: -1},
    limit: 10
  };

  return Radios.find(selector, options);
});

Meteor.publish('radios.single', function (radioId) {
  check(radioId, String);

  const selector = {
    _id: radioId,
    privacy: 'public'
  };
  const options = {
    fields: {_id: 1, title: 1, cover: 1, createdAt: 1}
  };

  return Radios.find(selector, options);
});
