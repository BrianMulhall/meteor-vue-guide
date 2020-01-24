import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  'users.updateProfile'({
    address, city, state, zipcode,
  }) {
    check(address, String);
    check(city, String);
    check(state, String);
    check(zipcode, String);

    const loggedInUserId = Meteor.userId();

    if (!loggedInUserId) {
      throw new Meteor.Error('access-denied', 'Access Denied');
    }

    Meteor.users.update(loggedInUserId, {
      $set: {
        address,
        city,
        state,
        zipcode,
      },
    });
  },
});
