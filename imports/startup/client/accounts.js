import { Accounts } from 'meteor/accounts-base'
import router from './router'

console.log('setting up the email link event handler');

Accounts.onEmailVerificationLink(function(token, done) {
    console.log('confirming email address')
    
    Accounts.verifyEmail(token, (error) => {
            if(!error) {
                console.log('done!');
            done();
            }
    });

  });


  Accounts.onResetPasswordLink(function (token, done) {
    console.log('reseting password')
  });

