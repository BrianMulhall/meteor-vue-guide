<template>
  <div class="container">
    <div class="page-header">
      <h1>Register</h1>
    </div>

    <div class="card">
      <div class="card-content">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form id="register" @submit.prevent="handleSubmit(register)">
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
              <ValidationProvider
                name="email"
                rules="required|email"
                v-slot="{ errors }"
              >
                <div class="input-field col s12">
                  <label class="active" for="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    class="validate"
                    v-model="email"
                  />
                  <span>{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
            </div>

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
                  <label class="active" for="confrimPassword"
                    >Confirm Password</label
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
              Register
              <i class="material-icons right">send</i>
            </button>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
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
    async register(evt) {
      await this.$recaptchaLoaded();

      // Execute reCAPTCHA with action "login".
      const token = await this.$recaptcha("login");

      Meteor.call(
        "accounts.Register",
        {
          username: this.username,
          email: this.email,
          password: this.password,
          recaptchaToken: token
        },
        (err, res) => {
          if (err) {
            this.$toasted.error(err.reason);
          } else {
            this.$toasted.info("Account has been registered");
            this.$router.push({ path: "/login" });
          }
        }
      );
    }
  }
};
</script>
