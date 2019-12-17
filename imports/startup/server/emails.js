import { Meteor } from 'meteor/meteor';

Meteor.methods({
    sendEmail(to, from, subject, text) {
      this.unblock();
      // Make sure that all arguments are strings.
      check([to, from, subject, text], [String]);
      // Let other method calls from the same client start running, without
      // waiting for the email sending to complete.
      Email.send({ to, from, subject, text });
    }

    });