<template>
  <div class="container">
    <div class="page-header">
      <h1>Reset Password</h1>
    </div>
    <div class="card">
      <div class="card-content">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form
            id="resetPassword"
            @submit.prevent="handleSubmit(resetPassword)"
          >
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
                  <label class="active" for="confrimPassword"
                    >Confirm New Password</label
                  >
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

            <button class="btn waves-effect waves-light" type="submit">
              Update Password
            </button>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      token: this.$route.params.token,
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    resetPassword(evt) {
      Accounts.resetPassword(
        this.token,
        this.password,
        function(err) {
          if (err) {
            this.$toasted.error(err.reason);
          } else {
            this.$toasted.info("Password has been reset");
            this.$router.push({ path: "/" });
          }
        }.bind(this)
      );
    }
  }
};
</script>
