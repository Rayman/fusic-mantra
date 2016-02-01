import {Template} from 'meteor/templating';
import {Playlists} from '/lib/collections';
import {ReactiveVar} from 'meteor/reactive-var';

Template.PlaylistContainer.onCreated(function () {
  var instance = this;
  instance.params = new ReactiveVar();

  instance.autorun(function () {
    var params = Template.currentData();
    instance.params.set(params);
    instance.subscribe('playlists.single', params._id);
  });
});

Template.PlaylistContainer.helpers({
  playlist: function () {
    var _id = Template.instance().params.get()._id;
    var p = Playlists.findOne({}, {_id});
    console.log('Template.PlaylistContainer::playlist', p);
    return p;
  }
});

Template.Playlist.onCreated(function () {
  console.log('Playlist.onCreated', this);
});
