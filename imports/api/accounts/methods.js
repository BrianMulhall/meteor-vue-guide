import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check'
import { Accounts } from 'meteor/accounts-base'


Meteor.methods({
  'accounts.CreateUser'({ email }) {
    check(email,String);
    const userId = Accounts.createUser( { 'email': email });
    Accounts.sendEnrollmentEmail( userId, email );
  },
  'accounts.ChangeUsername'({ userId, newUsername }) {
    check(userId,String);
    check(newUsername, String);

    Accounts.setUsername(userId, newUsername);

  },
  'accounts.ChangePassword'({ userId, newPassword }) {
    check(userId,String);
    check(newPassword, String);

    Accounts.setPassword(userId, newPassword, {logout: false});
  },
  'accounts.AddEmail'({ userId, newEmail }) {
    check(userId,String);
    check(newEmail, String);
    try{
    Accounts.addEmail(userId, newEmail, false);
    Accounts.sendVerificationEmail(userId, newEmail);
    }catch(err){
      throw new Meteor.Error(err);
    }
  },
  'accounts.DeleteEmail'({ userId, email }) {
    check(userId,String);
    check(email, String);
    
    console.log('my email is',email)
    try{
      Accounts.removeEmail(userId, email)
    }
    catch(err){
      throw new Meteor.Error(err);
    }
    
  }
});