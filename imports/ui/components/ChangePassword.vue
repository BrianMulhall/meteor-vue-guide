<template>
  <div class="container">

    <div class="page-header">
      <h1>User Profile</h1>
    </div>

    <div class="card">

      <div class="card-content">


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
        <button @click.prevent="updatePassword" class="btn waves-effect waves-light" type="submit">
            Update Password
            <i class="material-icons right">send</i>
          </button>

      </div>
    
    </div>

  </div>

</template>


<script>
import Vue from "vue";

export default {
  data() {
    return {
      password: ""
    };
  },
  mounted: function(){
  },
  meteor: {
  },
  methods: {
    updateUsername(evt) {
        
      
    }
  }
};
</script>
