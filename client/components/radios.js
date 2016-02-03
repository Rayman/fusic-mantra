import {Template} from 'meteor/templating';
import {Radios, RadioSchema} from '/lib/collections';

/**
 * Newest radios
 */

Template.lastRadiosContainer.onCreated(function () {
  var instance = this;

  instance.autorun(function () {
    instance.subscribe('radios.newest');
  });
});

Template.lastRadiosContainer.helpers({
  radios: function () {
    // TODO: use the same query as on the server
    const selector = {
      privacy: 'public'
    };
    const options = {
      fields: {title: 1, cover: 1, createdAt: 1, owner: 1, privacy: 1, songs: 1},
      sort: {createdAt: -1},
      limit: 10
    };

    return Radios.find(selector, options);
  }
});

/**
 * Create a new radio
 */

Template.insertRadioForm.helpers({
  RadioSchema: function () {
    console.log('helper called!!!');
    return RadioSchema.pick(['title', 'cover', 'privacy']);
  }
});
