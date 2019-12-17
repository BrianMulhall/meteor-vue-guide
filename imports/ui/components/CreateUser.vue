<template>
  <div class="container">
    <div class="page-header">
      <h1>Create Account</h1>
    </div>

    <div class="row">
      <form id="createUser" @submit.prevent="createUser">
        <div class="row">

          <ValidationProvider
            rules="required|email"
            name="Email"
            v-slot="{ errors }" >
            <div class="input-field col s12">
              <label class="active" for="email">Email</label>
              <input id="email" type="text" class="validate" v-model="email" />
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Create Account
          <i class="material-icons right">send</i>
        </button>

      </form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { createUser } from "../../api/accounts/methods.js";

export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    createUser(evt) {

      Meteor.call('accounts.CreateUser', {
          email: this.email
        }, (err, res) => {
          if (err) {
            console.log(err);
          } else {
            // success!
          }
      });


      console.log("calling function");
      createUser.call( { 'email': this.email },
        function(err) {
          if (err) {
            this.$toasted.error(err.reason);
          } else {
            this.$toasted.info("Account has been created");
          }
        }.bind(this)
      );
    }
  }
};
</script>
