import { Meteor } from 'meteor/meteor';

const options = {
  fields: {
    address: 1,
    city: 1,
    state: 1,
    zipcode: 1,
  },
};

Meteor.publish('userData', function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin', null)) {
    return Meteor.users.find();
  }
  if (this.userId) {
    return Meteor.users.find({ _id: this.userId }, options);
  }

  this.ready();
});
