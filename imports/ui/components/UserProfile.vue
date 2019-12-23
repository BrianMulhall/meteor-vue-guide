<template>
  <div class="container">
    <div class="page-header">
      <h1>User Profile</h1>
    </div>
       <div class="card">
      <div class="card-content">
       <form @submit.prevent="updateProfile()">
          <div class="input-field col s12">
            <label for="address">Address</label>
            <input
              id="address"
              type="text"
              required
              v-model.lazy="address"
              class="validate"
            />
          </div>

          <div class="input-field col s12">
            <label for="age">City</label>
            <input
              id="city"
              type="number"
              required
              min="0"
              max="120"
              v-model.number="city"
              class="validate"
            />
          </div>

          <div class="input-field col s12">
            <label for="height">State</label>
            <input
              id="state"
              v-model.number="state"
              class="validate"
            />
          </div>

          <div class="input-field col s12">
            <label for="weight">Zipcode</label>
            <input
              id="zipcode"
              v-model.number="zipcode"
              class="validate"
            />
          </div>
          <button class="btn waves-effect waves-light" type="submit" name="action">Submit
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
     zipcode:""
    };
  },
  methods: {
  },
  mounted() {
      
  },
  meteor: {
       // Subscriptions
    $subscribe: {
      // Subscribes to the 'threads' publication with no parameters
      'userData': [],
    },
    
  }
  
};
</script>
