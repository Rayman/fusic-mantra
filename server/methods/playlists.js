import {Playlists, Comments} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';

Meteor.methods({
  'playlists.create'(playlist) {

    check(playlist, {
        title: String,
        cover: Match.Optional(String),
        description: Match.Optional(String),
        privacy: Match.Optional(Match.OneOf('public', 'private')),
    });

    if (!playlist.privacy) {
        playlist.privacy = 'public'
    }

    // check(_id, String);
    // check(owner, String);

    // Show the latency compensations
    Meteor._sleepForMs(500);

    // TODO: Do some user authorization
    playlist.createdAt = new Date();
    Playlists.insert(playlist);
  }
});

Meteor.methods({
  'playlists.addSong'(_id, playlistId, songId) {
    check(_id, String);
    check(playlistId, String);
    check(text, String);

    // Show the latency compensations
    Meteor._sleepForMs(500);

    // XXX: Do some user authorization
    const createdAt = new Date();
    const author = 'The User';
    const comment = {_id, playlistId, author, text, createdAt};
    Comments.insert(comment);
  }
});
