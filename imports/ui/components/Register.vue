<template>
  <div class="container">
    <div class="page-header">
      <h1>Register</h1>
    </div>

    <div class="row">
      <form id="login">
        <div class="row">
          
            <ValidationProvider
              rules="required"
              name="Username"
              v-slot="{ errors }"
            >
              <div class="input-field col s12">
              <label for="username">UserName</label>
              <input
                id="username"
                type="text"
                class="validate"
                v-model="username"
              />
              <span>{{ errors[0] }}</span>
          </div>
            </ValidationProvider>
          
        </div>

        <div class="row">
          <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
          <div class="input-field col s12">
            <label for="username">Email</label>
            <input id="email" type="email" class="validate" v-model="email" />
             <span>{{ errors[0] }}</span>
          </div>
           </ValidationProvider>
        </div>

        <ValidationObserver>
          <div class="row">
            <ValidationProvider
              v-slot="{ errors }"
              name="Confirm Password"
              vid="password"
            >
              <div class="input-field col s12">
                <label for="password">Password</label>
                <input
                  id="password"
                  type="password"
                  class="validate"
                  v-model="password"
                />
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>

          <div class="row">
            <ValidationProvider
              rules="confirmed:password"
              name="Confirm Password"
              v-slot="{ errors }"
            >
              <div class="input-field col s12">
                <label for="confrimPassword">Confirm Password</label>
                <input
                  id="confrimPassword"
                  type="password"
                  class="validate"
                  v-model="confrimPassword"
                />
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>
        </ValidationObserver>

        <button
          class="btn waves-effect waves-light"
          type="submit"
          @click="register"
        >
          Register
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Accounts } from "meteor/accounts-base";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confrimPassword: ""
    };
  },
  methods: {
    register(event) {
      event.preventDefault();

      Accounts.createUser(
        { username: this.username,email: this.email, password: this.password },
        function(err) {
          if (err) {
            Vue.toasted.error(err.reason);
            
          } else {
            Vue.toasted.success("User Account Created");
            this.$router.push('login')
          }
        }
      );
    }
  }
};
</script>
