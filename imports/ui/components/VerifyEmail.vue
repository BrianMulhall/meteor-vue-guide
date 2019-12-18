<template>
  <div class="container">
    <div class="page-header">
      <h1>Verify Email Address</h1>
    </div>
    <div class="card">
      <div class="card-content">

          <button
            @click.prevent="verifyEmail"
            class="btn waves-effect waves-light"
            type="button"
          >
            Complete Verification
            <i class="material-icons right">send</i>
          </button>
          
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
      token: this.$route.params.token
    };
  },
  methods: {
    verifyEmail(evt) {
      Accounts.verifyEmail(
        this.token,
        function(err) {
          if (err) {
            this.$toasted.error(err.reason);
          } else {
            this.$toasted.info("Email Address has been verified");
            this.$router.push({ path: "/login" });
          }
        }.bind(this)
      );
    }
  }
};
</script>
