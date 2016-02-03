import {Radios, RadioItems} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';

Meteor.methods({
  'radios.create'(radio) {
    // Show the latency compensations
    Meteor._sleepForMs(500);

    // check(_id, String);
    check(radio, {
      title: String,
      cover: Match.Optional(String),
      privacy: Match.Optional(Match.OneOf('public', 'private'))
    });

    if (!radio.privacy) {
      radio.privacy = 'public';
    }

    check(this.userId, String);
    radio.owner = this.userId;

    radio.createdAt = new Date();
    Radios.insert(radio);
  }
});

Meteor.methods({
  'radios.addSong'(radioId, songId) {
    // check(_id, String);
    check(radioId, String);
    check(songId, String);

    // Show the latency compensations
    Meteor._sleepForMs(500);

    // XXX: Do some user authorization

    // Make a new radioItem
    const createdAt = new Date();
    const author = 'The User';

    const radioItem = {
      radioId,
      songId,
      createdAt,
      author
    };
    RadioItems.insert(radioItem);

    // Modify the radio
    // Radios.insert()
  }
});
