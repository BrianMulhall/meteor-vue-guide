<template>
  <div class="container">

    <div class="page-header">
      <h1>User Profile</h1>
    </div>

    <div class="card">

      <div class="card-content">
        
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

<script>
import Vue from "vue";

export default {
  data() {
    return {
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
  methods: {
    editUserProfile(evt) {
      Accounts.resetPassword(
        this.token,
        this.password,
        function(err) {
          if (err) {
            this.$toasted.error(err.reason);
          } else {
            this.$toasted.info("Password has been reset");
            this.$router.push({ path: "/login" });
          }
        }.bind(this)
      );
    }
  }
};
</script>
