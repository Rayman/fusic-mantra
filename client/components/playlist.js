import {Template} from 'meteor/templating';
import {Playlists} from '/lib/collections';

Template.playlistContainer.onCreated(function () {
  var instance = this;

  instance.autorun(function () {

  });

  instance.playlist = function () {
    return Playlists.find({}, {limit: instance.loaded.get()});
  };
});
