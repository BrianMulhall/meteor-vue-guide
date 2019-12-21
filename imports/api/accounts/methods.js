import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check'
import { Accounts } from 'meteor/accounts-base'


Meteor.methods({
  'accounts.CreateUser'({ email }) {
    check(email,String);
    const userId = Accounts.createUser( { 'email': email });
    Accounts.sendEnrollmentEmail( userId, email );
  },
  'accounts.ChangeUsername'({ userId, newUsername }) {
    check(userId,String);
    check(newUsername, String);

    Accounts.setUsername(userId, newUsername);

  },
  'accounts.ChangePassword'({ userId, newPassword }) {
    check(userId,String);
    check(newPassword, String);

    Accounts.setPassword(userId, newPassword, {logout: false});
  }
});