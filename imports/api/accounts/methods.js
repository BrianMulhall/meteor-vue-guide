import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';
import { HTTP } from 'meteor/http';



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
  'accounts.Register'({ username, email, password, recaptchaToken }) {
    check(username, String);
    check(email, String);
    check(password, String);
    check(recaptchaToken, String);

    HTTP.post(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        data: {
          secret: Meteor.settings.public.recaptcha_v3_secret_key,
          response: recaptchaToken,
        },
      },
      function (err, result) {
        if (err) {
          throw new Meteor.Error('Recaptcha Error');
        }

        if (result.statusCode === 200) {
          Accounts.createUser(
            {
              username,
              email,
              password,
            },
          );
        }
      },
    );
  },
});
