import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Accounts } from 'meteor/accounts-base'


export const createUser = new ValidatedMethod({
  
  name: 'accounts.CreateUser',
  
  validate: new SimpleSchema({
        username: { type: String },
        email:    { type: String }
    }).validator(),

  run({ username, email }){
    try {
      
      const userId = Accounts.createUser( { 'username': username, 'email': email });
      Accounts.sendEnrollmentEmail( userId, email )

    } catch(err) {
      throw new Meteor.Error(err);
    }
    
    
  }
});