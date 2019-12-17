import { Accounts } from 'meteor/accounts-base'


Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});

// reset password email
Accounts.urls.resetPassword = function reset(token) {
  return Meteor.absoluteUrl( `resetPassword/${token}` );
};

// verify email
Accounts.urls.verifyEmail = function verify(token) {
  return Meteor.absoluteUrl( `verifyEmail/${token}` );
};

// enroll email
Accounts.urls.enrollAccount = function enroll(token) {
  return Meteor.absoluteUrl( `enrollAccount/${token}` );
};

  