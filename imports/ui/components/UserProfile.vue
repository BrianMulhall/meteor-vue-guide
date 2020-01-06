<template>
  <div class="container">
    <div class="page-header">
      <h1>User Profile</h1>
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
            <select id="state" v-model="state">
              <option v-for="s in states"> {{ s }} </option>
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
import { Meteor } from "meteor/meteor";

export default {
  data() {
    return {
      address: "",
      city: "",
      state: "",
      zipcode: "",
      states: this.$store.getters.getStates
    };
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
    }
  },
  mounted() {
    this.$autorun(() => {
      if (Meteor.user()) {
        this.address = Meteor.user().address;
        this.city = Meteor.user().city;
        this.state = Meteor.user().state;
        this.zipcode = Meteor.user().zipcode;
      }
    });
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
  },
  meteor: {
    // Subscriptions
    $subscribe: {
      // Subscribes to the 'threads' publication with no parameters
      userData: []
    }
  }
};
</script>
