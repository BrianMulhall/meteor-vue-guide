<template>
  <div class="container">

    <div class="page-header">
      <h1>User Profile</h1>
    </div>

    <div class="card">

      <div class="card-content">
        
        <div class="row">
              <div  class="input-field col s12">
                <label class="active" for="username">Username</label>
                <input type="text" readonly class="validate" v-model="username" />
              </div>
           

         
              </div>

          <div class="row">
              <div  class="input-field col s12">
                <label class="active" for="username">Username</label>
                <input type="text" class="validate" v-model="newUsername"/>
                <span>{{ errors[0] }}</span>
              </div>
            </div>

        <button @click.prevent="updateUsername" class="btn waves-effect waves-light" type="button">
            Update Username
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
      username: Meteor.user().username,
      newUsername: ""
    };
  },
  mounted: function(){
      
  },
  meteor: {
  },
  methods: {
    updateUsername(evt) {
        Accounts.setUsername(Meteor.userId(), this.newUsername);
    }
  }
};
</script>
