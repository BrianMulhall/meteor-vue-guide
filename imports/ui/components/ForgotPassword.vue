<template>
  <div class="container">
    <div class="page-header">
      <h1>Forgot Password</h1>
    </div>

    <div class="row">
      <form id="forgotPassword" @submit.prevent="forgotPassword">
        <div class="row">
          
            <ValidationProvider
              rules="required|email"
              name="Email"
              v-slot="{ errors }"
            >
              <div class="input-field col s12">
              <label class="active" for="email">Email</label>
              <input
                id="email"
                type="text"
                class="validate"
                v-model="email"
              />
              <span>{{ errors[0] }}</span>
          </div>
            </ValidationProvider>
          
        </div>


        <button class="btn waves-effect waves-light" type="submit" >
          Forgot Password
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Accounts } from 'meteor/accounts-base'

export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    forgotPassword(evt) {
        Accounts.forgotPassword({ email: this.email },(function (err) {
                  if (err) {
                    this.$toasted.error(err.reason);
                  } else {
                    this.$toasted.info('Password reset email has been sent');
                    this.$router.push({ path: '/login' })
                  }
            }).bind(this))
    }

    }
};
</script>
