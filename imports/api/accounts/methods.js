import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';


Meteor.methods({
  'accounts.CreateUser'({ email }) {
    check(email, String);
    const userId = Accounts.createUser({ email });
    Accounts.sendEnrollmentEmail(userId, email);
  },
  'accounts.ChangeUsername'({ userId, newUsername }) {
    check(userId, String);
    check(newUsername, String);

    Accounts.setUsername(userId, newUsername);
  },
  'accounts.ChangePassword'({ userId, newPassword }) {
    check(userId, String);
    check(newPassword, String);

    Accounts.setPassword(userId, newPassword, { logout: false });
  },
  'accounts.AddEmail'({ userId, newEmail }) {
    check(userId, String);
    check(newEmail, String);

    Accounts.addEmail(userId, newEmail, false);
    Accounts.sendVerificationEmail(userId, newEmail);
  },
  'accounts.DeleteEmail'({ userId, email }) {
    check(userId, String);
    check(email, String);

    Accounts.removeEmail(userId, email);
  },
});
