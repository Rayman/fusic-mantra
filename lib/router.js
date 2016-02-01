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

Router.route('/playlists');
Router.route('/playlist/:_id', function () {
  this.render('Playlists', {
    data: function () {
      return Playlists.findOne({_id: this.params._id});
    }
  });
});

Router.route('/radios');
Router.route('/radios/:_id');
