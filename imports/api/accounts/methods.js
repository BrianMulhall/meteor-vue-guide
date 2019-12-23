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
  'accounts.UpdateProfile'({ address, city, state, zipcode }) {
    check(address,String);
    check(city,String);
    check(state,String);
    check(zipcode,String);

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
  },
  'accounts.AddEmail'({ userId, newEmail }) {
    check(userId,String);
    check(newEmail, String);

    Accounts.addEmail(userId, newEmail, false);
    Accounts.sendVerificationEmail(userId, newEmail);

  },
  'accounts.DeleteEmail'({ userId, email }) {
    check(userId,String);
    check(email, String);
    
    Accounts.removeEmail(userId, email)
  }
});