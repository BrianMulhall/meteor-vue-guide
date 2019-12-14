<template>
  <div class="container">
    <div class="page-header">
      <h1>Login</h1>
    </div>

    <div class="row">
      <form id="login" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input
              id="username"
              type="text"
              class="validate"
              v-model="username"
            />
            <label for="username">UserName</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input
              id="password"
              type="password"
              class="validate"
              v-model="password"
            />
            <label for="password">Password</label>
          </div>
        </div>

        <button
          class="btn waves-effect waves-light"
          type="submit"
          @click="login"
        >
          Login
          
        </button>

        <button
          class="btn waves-effect waves-light"
          @click="register"
        >          Register


        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";
import Vue from "vue";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login(event) {    
        event.preventDefault(); 
        
        Meteor.loginWithPassword( this.username, this.password, function(err){
        if(err) console.log(err);
        
      });
                this.$router.replace({ path: '/' })
        
    },
    register(event) {
        event.preventDefault(); 
        this.$router.replace({ path: '/register' })
    }
  }
};
</script>
