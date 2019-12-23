<template>
  <div class="container">

    <div class="page-header">
      <h1>Add/Remove Emails</h1>
    </div>

    <div class="card">
      <div class="card-content"> 



             <table>
        <thead>
          <tr>
              <th>Email Address</th>
              <th>Verified</th>
              <th></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(email, index)  in emails">
            <td>{{ email.address }}</td>
            <td>{{ email.verifieid ? "Yes" : "No" }}</td>
            <td class="center-align"><button class="btn waves-effect waves-light" :data-index="index" @click.prevent="deleteEmail" >Delete</button></td>
          </tr>

        </tbody>
      </table>
      
      </div>
    </div>
  <div class="card">
      <div class="card-content"> 
      <div class="row">
          <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
            <div class="input-field col s12">
                <label class="active" for="email">Email</label>
                <input id="email" type="email" class="validate" v-model="newEmail" />
                <span>{{ errors[0] }}</span>
            </div>
           </ValidationProvider>
        </div>
          
        <button @click.prevent="addEmail" class="btn waves-effect waves-light" type="button">
            Add New Email
            <i class="material-icons right">send</i>
          </button>
          </div>
          </div>
  </div>
</template>



<script>
import Vue from "vue";
import { Meteor } from 'meteor/meteor';

export default {
  data() {
    return {
      emails: [],
      newEmail: ""
    };
  },
   mounted() {
    this.$autorun(() => { 
      if(Meteor.user()){
        this.emails =  Meteor.user().emails
      }
    });
    
  },
  methods: {
    deleteEmail(evt) {
        Meteor.call('accounts.DeleteEmail', {
          userId: Meteor.userId(), email: this.emails[evt.currentTarget.dataset.index].address
        }, (err, res) => {
          if (err) {
            this.$toasted.error(err.reason);
          } else {
            this.newUsername = "";
            this.$toasted.info('Email has been removed');
          }
      });
        
    },
     addEmail(evt) {
       console.log('adding a new email')
        Meteor.call('accounts.AddEmail', {
          userId: Meteor.userId(), newEmail: this.newEmail
        }, (err, res) => {
          if (err) {
            this.$toasted.error(err.reason);
          } else {
            this.newUsername = "";
            this.$toasted.info('New email has been added');
          }
      });
        
    },
  }
};
</script>
