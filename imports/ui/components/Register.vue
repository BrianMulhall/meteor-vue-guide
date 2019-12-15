<template>
  <div class="container">
    <div class="page-header">
      <h1>Register</h1>
    </div>

    <div class="row">
      <form id="register" @submit.prevent="register">
        <div class="row">
          
            <ValidationProvider
              rules="required"
              name="Username"
              v-slot="{ errors }"
            >
              <div class="input-field col s12">
              <label class="active" for="username">UserName</label>
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
            <label class="active" for="username">Email</label>
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
                <label class="active" for="password">Password</label>
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
                <label class="active" for="confrimPassword">Confirm Password</label>
                <input
                  id="confrimPassword"
                  type="password"
                  class="validate"
                  v-model="confirmPassword"
                />
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>
        </ValidationObserver>

        <button class="btn waves-effect waves-light" type="submit" >
          Register
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { registerAccount } from "../../api/accounts/methods.js";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    register(evt) {
      Accounts.createUser( { 'username': this.username,  'email': this.email,  'password': this.password }, function(err){
        if(err) console.log(err)
      } );
      //registerAccount.call( { username: this.username,  email: this.email,  password: this.password } );
    }

    }
};
</script>
