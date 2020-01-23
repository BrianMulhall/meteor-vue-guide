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
import { Meteor } from "meteor/meteor";

export default {
  data() {
    return {
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
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
  },
  meteor: {
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
