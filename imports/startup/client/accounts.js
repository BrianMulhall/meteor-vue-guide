import { Accounts } from 'meteor/accounts-base'
import router from './router'

// Accounts.ui.config({
//     requestPermissions: {
//     },
//     requestOfflineToken: {
//     },
//     forceApprovalPrompt: {
//     },
//     passwordSignupFields: 'USERNAME_AND_EMAIL'
//   });


  
  Accounts.onEnrollmentLink(function (token, done) {
    console.log('enrollment triggered')
  });
