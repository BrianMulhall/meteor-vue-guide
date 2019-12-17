<template>
  <div class="container">
    <div class="page-header">
      <h1>Enroll Account</h1>
    </div>

    <div class="row">
      <form id="enrollAccount" @submit.prevent="enrollAccount">
        <ValidationObserver>
          <div class="row">
            <ValidationProvider
              v-slot="{ errors }"
              name="Password"
              vid="password"
            >
              <div class="input-field col s12">
                <label class="active" for="password">New Password</label>
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
                <label class="active" for="confrimPassword">Confirm New Password</label>
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
          Create Password
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
        token: this.$route.params.token,
        password: "",
        confirmPassword: ""
    };
  },
  methods: {
    enrollAccount(evt) {
      Accounts.resetPassword(this.token, this.password, (function (err) {
                  if (err) {
                    this.$toasted.error(err.reason);
                  } else {
                    this.$toasted.info('Password has been reset');
                    this.$router.push({ path: '/login' })
                  }
            }).bind(this)) 
     
    }
    }
};
</script>
