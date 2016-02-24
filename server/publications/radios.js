import {Radios, RadioItems, Songs} from '/lib/collections';
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

  Meteor._sleepForMs(1000);
  return Radios.find(selector, options);
});

Meteor.publishComposite('radios.single', function (radioId) {
  return {
    find: function () {
      check(radioId, String);

      const selector = {
        _id: radioId,
        privacy: 'public'
      };
      const options = {
        fields: {_id: 1, title: 1, cover: 1, createdAt: 1}
      };

      Meteor._sleepForMs(1000);
      return Radios.find(selector, options);
    },
    children: [{
      find: function () {
        Meteor._sleepForMs(500);
        return RadioItems.find({radioId});
      },
      children: [{
        find: function (radioItem) {
          const {songId} = radioItem;

          check(songId, String);
          return Songs.find(songId);
        }
      }]
    }]
  };
});
