import { Accounts } from 'meteor/accounts-base'

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

