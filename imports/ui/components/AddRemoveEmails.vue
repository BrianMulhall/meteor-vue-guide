<template>
  <div class="container">

    <div class="page-header">
      <h1>Add/Remove Emails</h1>
    </div>

    <div class="card">
      <div class="card-content"> 
          <div>
              <ul>
                  <li @click.prevent="deleteEmail" v-for="item in emails">
                       {{ item.address  }} {{item.verified}}
                  </li>
              </ul>
          </div>
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

        Meteor.call('accounts.ChangeUsername', {
          userId: Meteor.userId(), newUsername: this.newUsername
        }, (err, res) => {
          if (err) {
            this.$toasted.error(err.reason);
          } else {
            this.newUsername = "";
            this.$toasted.info('Username update successfully');
          }
      });
        
    }
  }
};
</script>
