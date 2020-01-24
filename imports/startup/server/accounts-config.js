import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false,
  loginExpirationInDays: 3, // days (default is 90)
  // oauthSecretKey:
  // restrictCreationByEmailDomain
  passwordResetTokenExpirationInDays: 3, // days (default is 3)
  passwordEnrollTokenExpirationInDays: 30, // days (default is 30)
  ambiguousErrorMessages: true,
});

// reset password email
Accounts.urls.resetPassword = function reset(token) {
  return Meteor.absoluteUrl(`resetPassword/${token}`);
};

// verify email
Accounts.urls.verifyEmail = function verify(token) {
  return Meteor.absoluteUrl(`verifyEmail/${token}`);
};

// enroll email
Accounts.urls.enrollAccount = function enroll(token) {
  return Meteor.absoluteUrl(`enrollAccount/${token}`);
};

Accounts.onLogout(function (attempt) { console.log('logging out', Meteor.userId()); });

Accounts.onLogin(function (attempt) { console.log('logging in', Meteor.userId()); });

Accounts.onLoginFailure(function (attempt) { console.log('log in failed'); });
