<template>
  <div class="container">
    <div class="page-header">
      <h1>Update Profile</h1>
    </div>

    <div class="card">
      <div class="card-content">
        <div class="row">
          <div class="input-field col s12">
            <label class="active" for="username">Username</label>
            <input type="text" readonly class="validate" v-model="username" />
          </div>
        </div>

        <!-- Username Modal -->
        <div id="updateUsernameModal" class="modal">
          <div class="modal-content">
            <div class="input-field col s12">
              <label class="active" for="username">New Username</label>
              <input type="text" class="validate" v-model="newUsername" />
            </div>
          </div>
          <div class="modal-footer">
            <button
              @click.prevent="closeUsernameModal"
              class="btn waves-effect waves-light red"
              type="button"
            >
              Close
            </button>
            <button
              @click.prevent="updateUsername"
              class="btn waves-effect waves-light"
              type="button"
            >
              Save
            </button>
          </div>
        </div>

        <!-- Password Modal -->
        <div id="updatePasswordModal" class="modal">
          <ValidationObserver>
            <div class="row">
              <ValidationProvider
                v-slot="{ errors }"
                name="Password"
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
          </ValidationObserver>
          <div class="modal-footer">
            <button
              @click.prevent="closePasswordModal"
              class="btn waves-effect waves-light red"
              type="button"
            >
              Close
            </button>
            <button
              @click.prevent="updatePassword"
              class="btn waves-effect waves-light"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>

        <button data-target="updateUsernameModal" class="btn modal-trigger">
          Update Username
        </button>
        <button data-target="updatePasswordModal" class="btn modal-trigger">
          Update Password
        </button>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <form @submit.prevent="updateProfile()">
          <div class="input-field col s12">
            <label class="active" for="address">Address</label>
            <input
              id="address"
              type="text"
              required
              v-model.lazy="address"
              class="validate"
            />
          </div>

          <div class="input-field col s12">
            <label class="active" for="age">City</label>
            <input
              id="city"
              type="text"
              required
              min="0"
              max="120"
              v-model.lazy="city"
              class="validate"
            />
          </div>

          <div class="input-field col s12">
            <label class="active" for="state">State</label>
            <select
              id="state"
              v-model="state"
              @change="onChange($event.target.value)"
            >
              <option v-for="s in states" v-bind:value="s"> {{ s }} </option>
            </select>
          </div>

          <div class="input-field col s12">
            <label class="active" for="zipcode">Zipcode</label>
            <input
              id="zipcode"
              type="text"
              v-model.lazy="zipcode"
              class="validate"
            />
          </div>

          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Update Profile
            <i class="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Meteor } from "meteor/meteor";

export default {
  data() {
    return {
      username: "",
      newUsername: "",
      password: "",
      confirmPassword: "",
      states: this.$store.getters.getStates
    };
  },
  mounted() {
    let modals = document.querySelectorAll(".modal");
    let modalsInstances = M.Modal.init(modals, {});
    var select = document.querySelectorAll("select");
    var selectInstances = M.FormSelect.init(select, {});
  },
  methods: {
    updateProfile: function(evt) {
      Meteor.call(
        "users.updateProfile",
        {
          address: this.address,
          city: this.city,
          state: this.state,
          zipcode: this.zipcode
        },
        (err, res) => {
          if (err) {
            this.$toasted.error(err.reason);
          } else {
            this.$toasted.info("User Profile updates successfully");
          }
        }
      );
    },
    updateUsername(evt) {
      Meteor.call(
        "accounts.ChangeUsername",
        {
          userId: Meteor.userId(),
          newUsername: this.newUsername
        },
        (err, res) => {
          if (err) {
            this.$toasted.error(err.reason);
          } else {
            this.newUsername = "";
            this.$toasted.info("Username update successfully");
          }
          let elem = document.querySelectorAll("#updateModal");
          let instance = M.Modal.getInstance(elem[0]);
          instance.close();
        }
      );
    },
    updatePassword(evt) {
      Meteor.call(
        "accounts.ChangePassword",
        {
          userId: Meteor.userId(),
          newPassword: this.password
        },
        (err, res) => {
          if (err) {
            this.$toasted.error(err.reason);
          } else {
            this.$toasted.info("Password update successfully");
          }
        }
      );
    },
    closeUsernameModal(evt) {
      let elem = document.querySelectorAll("#updateUsernameModal");
      let instance = M.Modal.getInstance(elem[0]);
      instance.close();
    },
    closePasswordModal(evt) {
      let elem = document.querySelectorAll("#updatePasswordModal");
      let instance = M.Modal.getInstance(elem[0]);
      instance.close();
    }
  },
  meteor: {
    username() {
      return Meteor.user().username;
    },
    address() {
      return Meteor.user().address;
    },
    city() {
      return Meteor.user().city;
    },
    state() {
      return Meteor.user().state;
    },
    zipcode() {
      return Meteor.user().zipcode;
    }
  }
};
</script>
