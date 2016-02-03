// enable route debugging
import {Iron} from 'meteor/iron:core';
import {Router} from 'meteor/iron:router';

Iron.debug = true;

/**
 * Global Router options
 */

Router.configure({
  layoutTemplate: 'MasterLayout',
  yieldRegions: {
    Header: {to: 'header'},
    Footer: {to: 'footer'}
  },
  notFoundTemplate: 'NotFound'
  // loadingTemplate: 'Loading'
});

/**
 * Routes
 */

Router.route('/', {
  name: 'home'
});

Router.route('/top');

Router.route('/playlists', {
  template: 'PlaylistsView'
});
Router.route('/playlists/:_id', {
  name: 'playlists.single',
  template: 'PlaylistView',
  data: function () {
    return {
      _id: this.params._id
    };
  }
});

Router.route('/radios', {
  template: 'RadiosView'
});
Router.route('/radios/:_id', {
  name: 'radios.single',
  template: 'RadioView',
  data: function () {
    return {
      _id: this.params._id
    };
  }
});
