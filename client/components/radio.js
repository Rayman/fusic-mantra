import {Template} from 'meteor/templating';
import {Radios} from '/lib/collections';
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
    var p = Radios.findOne({}, {_id});
    console.log('Template.RadioContainer::radio', p);
    return p;
  }
});

Template.Radio.onCreated(function () {
  console.log('Radio.onCreated', this);
});
