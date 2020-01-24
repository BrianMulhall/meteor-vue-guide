import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';

Meteor.methods({
  'roles.createRole'(newRole) {
    check(newRole, String);

    const loggedInUser = Meteor.user();

    if (!loggedInUser || !Roles.userIsInRole(loggedInUser, ['admin'], null)) {
      throw new Meteor.Error('access-denied', 'Access Denied: Only Admins can Create a Role');
    }

    Roles.createRole(newRole, { unlessExists: true });
  },
  'roles.deleteRole'(role) {
    check(role, String);

    const loggedInUser = Meteor.user();

    if (!loggedInUser || !Roles.userIsInRole(loggedInUser, ['admin'], null)) {
      throw new Meteor.Error('access-denied', 'Access Denied: Only Admins can Delete a Role');
    }

    Roles.deleteRole(role);
  },
});
