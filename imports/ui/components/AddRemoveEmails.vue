<template>
  <div class="container">

    <div class="page-header">
      <h1>Add/Remove Emails</h1>
    </div>

    <div class="card">
      <div class="card-content"> 
        <div class="row">
              <div  class="input-field col s12">
                <label class="active" for="username">Username</label>
                <input type="text" readonly class="validate" v-model="username" />
              </div>
          </div>

          <div class="row">
              <div  class="input-field col s12">
                <label class="active" for="username">New Username</label>
                <input type="text" class="validate" v-model="newUsername"/>
              </div>
            </div>

        <button @click.prevent="updateUsername" class="btn waves-effect waves-light" type="button">
            Update Username
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
      username: "",
      newUsername: ""
    };
  },
   mounted() {
    this.$autorun(() => { 
      if(Meteor.user()){
        this.username =  Meteor.user().username
      }
    });
    
  },
  methods: {
    updateUsername(evt) {

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
