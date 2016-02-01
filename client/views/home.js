import {Template} from 'meteor/templating';
import {PlaylistSchema} from '/lib/collections';

Template.insertPlaylistForm.helpers({
  PlaylistSchema: function () {
    return PlaylistSchema.pick(['title', 'cover', 'privacy']);
  }
});
