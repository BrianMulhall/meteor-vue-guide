import { Accounts } from 'meteor/accounts-base'

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
  