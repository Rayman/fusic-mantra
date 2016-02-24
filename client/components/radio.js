import {Template} from 'meteor/templating';
import {Radios, RadioItems, Songs} from '/lib/collections';
import {ReactiveVar} from 'meteor/reactive-var';

Template.RadioContainer.onCreated(function () {
  var instance = this;
  instance.params = new ReactiveVar();

  instance.autorun(function () {
    var params = Template.currentData();
    instance.params.set(params);
    instance.subscribe('radios.single', params._id);
  });
});

Template.RadioContainer.helpers({
  radio: function () {
    var _id = Template.instance().params.get()._id;
    return Radios.findOne({}, {_id});
  },
  subscriptionsReady: function () {
    return Template.instance().subscriptionsReady();
  }
});

Template.Radio.onCreated(function () {
  console.log('Radio.onCreated', this);
});

Template.Radio.helpers({
  songs: function () {
    const radioId = this._id;
    return RadioItems.find({radioId});
  },
  song: function () {
    const radioItem = this;
    return Songs.findOne(radioItem.songId);
  }
});
