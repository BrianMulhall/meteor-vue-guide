<template>
  <div class="container">
        <div class="page-header">
      <h1>Login</h1>
    </div>
    <div class="z-depth-4 card">
        <div class="card-content">
      <form id="login" class="col s12" @submit.prevent="login">

        <div class="row">
          <div class="input-field col s12">
             <i class="material-icons prefix">account_circle</i>
            <input
              id="username"
              type="text"
              class="validate"
              v-model="username"
            />
            <label class="active" for="username">UserName</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
          <i class="material-icons prefix">lock</i>
            <input
              id="password"
              type="password"
              class="validate"
              v-model="password"
            />
            <label class="active" for="password">Password</label>
          </div>
        </div>


        <button class="btn waves-effect" type="submit" > Login </button>
      </form>
      </div>
    </div>
    <div class="z-depth-4 card">
        <div class="card-content">
          <a @click.prevent="loginGithub" class="btn btn-block btn-social btn-github"><span class="fa fa-github"></span>Sign in with Github</a>

          <a @click.prevent="loginGoogle" class="btn btn-block btn-social btn-google"><span class="fa fa-google"></span>Sign in with Google</a>

          <a @click.prevent="loginFacebook" class="btn btn-block btn-social btn-facebook"><span class="fa fa-facebook"></span>Sign in with Facebook</a>

          <a @click.prevent="loginTwitter" class="btn btn-block btn-social btn-twitter"><span class="fa fa-twitter"></span>Sign in with Twitter</a>
        </div>    
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
      password: "",
      isLoggingIn: Meteor.loggingIn()
    };
  },
  methods: {
    login(evt) {     
        Meteor.logoutOtherClients((err) => console.log(err));
        Meteor.loginWithPassword( this.username, this.password, 
           (function (err) {
                  if (err) {
                    this.$toasted.error(err.reason);
                  } else {
                    this.$router.push({ path: '/' })
                  }
            }).bind(this))
    },

    loginGithub(event){
      Meteor.loginWithGithub({ requestPermissions: ['user', 'public_repo'] }, (error) => {
          if (error) {
            this.$toasted.error(err.reason);
          }
          else{
            this.$toasted.info('Github account has been used to log in');
            this.$router.push({ path: "/" });
          }
        });
    },
    loginFacebook(event){
      Meteor.loginWithFacebook({
        requestPermissions: ['user_friends', 'public_profile', 'email']
      },(error) => {
          if (error) {
            this.$toasted.error(err.reason);
          }
          else{
            this.$toasted.info('Facebook account has been used to log in');
            this.$router.push({ path: "/" });
          }
      });
    }
  }
};
</script>
