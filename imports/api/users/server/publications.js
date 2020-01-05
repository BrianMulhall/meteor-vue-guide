Meteor.publish("userData", function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin', null)) {
    return Meteor.users.find();
  }
  else if (this.userId) {
    return Meteor.users.find({ _id: this.userId });
  }
  else {
    this.ready();
  }
});
