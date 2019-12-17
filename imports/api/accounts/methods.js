import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Accounts } from 'meteor/accounts-base'


// export const createUser = new ValidatedMethod({
  
//   name: 'accounts.CreateUser',
  
//   validate: new SimpleSchema({
//         email:    { type: String }
//     }).validator(),

//   run({ email }){
//     try{
//       console.log('running accounts.CreateUser ')
//       const userId = Accounts.createUser( { 'email': email });
//       console.log('second ')
//       Accounts.sendEnrollmentEmail( userId, email )
//       console.log('third ')  
//     }catch(err){
//       console.log(err);
//     }
//   }
// });

Meteor.methods({
  'accounts.CreateUser'({ email }) {
   
    console.log('running accounts.CreateUser ');
    const userId = Accounts.createUser( { 'email': email });
    console.log('second ');
    Accounts.sendEnrollmentEmail( userId, email );
    console.log('third ');  

  }
});