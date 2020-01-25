<template>
  <div class="container">
    <div class="page-header">
      <h1>Create Account</h1>
    </div>

    <div class="card">
      <div class="card-content">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form id="createUser" @submit.prevent="handleSubmit(createUser)">
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

            <button class="btn waves-effect waves-light" type="submit">
              Create Account
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
      email: ""
    };
  },
  methods: {
    createUser(evt) {
      Meteor.call(
        "accounts.CreateUser",
        {
          email: this.email
        },
        (err, res) => {
          if (err) {
            this.$toasted.error(err.reason);
          } else {
            this.$toasted.info("Enrollment email has been sent");
          }
        }
      );
    }
  }
};
</script>
