<template>
  <div class="container">

    <div class="page-header">
      <h1>Add/Remove Emails</h1>
    </div>

    <div class="card">
      <div class="card-content"> 
          <div>
              <ul>
                  <li v-for="item in emails">
                       {{ item.address  }} {{item.verified}}
                  </li>

              </ul>


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
      emails: []
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
