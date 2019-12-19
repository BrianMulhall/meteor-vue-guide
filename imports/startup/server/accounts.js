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

  
Accounts.onLogout(function(attempt){console.log('logging out',attempt, Meteor.userId()) });

Accounts.onLogin(function(attempt){console.log('logging in',attempt, Meteor.userId()) });

Accounts.onLoginFailure(function(attempt){console.log('log in failed', attempt) })