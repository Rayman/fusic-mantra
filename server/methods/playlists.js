import {Playlists, PlaylistItems} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';

Meteor.methods({
  'playlists.create'(playlist) {
    check(playlist, {
      title: String,
      cover: Match.Optional(String),
      description: Match.Optional(String),
      privacy: Match.Optional(Match.OneOf('public', 'private'))
    });

    if (!playlist.privacy) {
      playlist.privacy = 'public';
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
  'playlists.addSong'(playlistId, songId) {
    // check(_id, String);
    check(playlistId, String);
    check(songId, String);

    // Show the latency compensations
    Meteor._sleepForMs(500);

    // XXX: Do some user authorization

    // Make a new playlistItem
    const createdAt = new Date();
    const author = 'The User';

    const playlistItem = {
      playlistId,
      songId,
      createdAt,
      author
    };
    PlaylistItems.insert(playlistItem);

    // Modify the playlist
    // Playlists.insert()
  }
});
