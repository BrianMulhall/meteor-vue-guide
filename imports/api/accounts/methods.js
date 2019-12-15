import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Accounts } from 'meteor/accounts-base'


export const registerAccount = new ValidatedMethod({
  
  name: 'accounts.Registration',
  
  validate: new SimpleSchema({
        username: {type: String },
        email: { type: String },
        password: { type: String }
    }).validator(),

  run({ username, email, password }){
    
    //const userId = Accounts.createUser( { username: username, email: email, password: password });

    try{ 

      const id = Accounts.createUser( { username,
                                        email,
                                        password });
      console.log(id)
    } catch(err){
      console.log(err);
    }
    
    
  }
});