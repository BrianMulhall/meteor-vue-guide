<template>
  <div class="container">

    <div class="page-header">
      <h1>User Profile</h1>
    </div>

    <div class="card">

      <div class="card-content">
        
          <div class="row">
            <ValidationProvider v-slot="{ errors }" name="username" rules="required" >
              <div @click.prevent="updateUsername" class="input-field col s12">
                <label class="active" for="username">Username</label>
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



         <ValidationObserver>
          <div class="row">
            <ValidationProvider
              v-slot="{ errors }"
              name="Password"
              vid="password"
            >
              <div class="input-field col s6">
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
        <button class="btn waves-effect waves-light" type="submit">
            Update Password
            <i class="material-icons right">send</i>
          </button>




        <form id="editUserProfile" @submit.prevent="editUserProfile" >

          <div class="row">
            <ValidationProvider v-slot="{ errors }" name="address" rules="required" >
              <div class="input-field col s12">
                <label class="active" for="address">Address</label>
                <input
                  id="address"
                  type="text"
                  class="validate"
                  v-model="address"
                />
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
              </div>

              <div class="row">
            <ValidationProvider v-slot="{ errors }" name="city" vid="city" rules="required" >
              <div class="input-field col s4">
                <label class="active" for="city">City</label>
                <input id="city" type="text" class="validate" v-model="city" />
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>


        <ValidationProvider
              v-slot="{ errors }"
              name="state"
              rules="required"
            >
             <div class="input-field col s4">
              <label class="active" for="state">State</label>
              <select id="state"  v-model="state">
                <option value="" disabled selected>Choose your option</option>
                <option value="1">AL</option>
                <option value="2">AK</option>
                <option value="3">AR</option>
              </select>
               <span>{{ errors[0] }}</span>
          </div>
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ errors }"
              name="zipcode"
              rules="required"
            >
              <div class="input-field col s4">
                <label class="active" for="zipcode">Zipcode</label>
                <input
                  id="zipcode"
                  type="text"
                  class="validate"
                  v-model="zipcode"
                />
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>

          <button class="btn waves-effect waves-light" type="submit">
            Update Profile
            <i class="material-icons right">send</i>
          </button>

        </form>

      </div>
    
    </div>

  </div>

</template>

<modal name="hello-world">
  hello, world!
</modal>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      username: Meteor.user().username,
      emails: Meteor.user().emails,
      password: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
  },
  mounted: function(){
      var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {} );
  },
  meteor: {
  },
  methods: {
    updateUsername(evt) {
      debugger;
      this.$modal.show('hello-world');
    }
  }
};
</script>
