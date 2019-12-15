import { Accounts } from 'meteor/accounts-base'

console.log(Accounts.urls.verifyEmail)
//console.log(Accounts)

// Accounts.ui.config({
//     requestPermissions: {
//     },
//     requestOfflineToken: {
//     },
//     forceApprovalPrompt: {
//     },
//     passwordSignupFields: 'USERNAME_AND_EMAIL'
//   });

Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});


Accounts.urls.resetPassword = function reset(token) {
  return Meteor.absoluteUrl('resetPassword/' + token);
};


  