import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';

// Username validation
// Validate username, sending a specific error message on failure.
Accounts.validateNewUser(function (user) {
  if (!user.username || user.username.length < 3) {
    throw new Meteor.Error(403, 'Username must have at least 3 characters');
  }

  var blackList = [
    'root',
    'admin',
    'default'
  ];
  if (blackList.indexOf(user.username) !== -1) {
    throw new Meteor.Error(403, 'Not a valid username, choose something more personal ;)');
  }

  return true;
});
