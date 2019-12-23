<template>
  <div class="container">
    <div class="page-header">
      <h1>Roles Managment</h1>
    </div>

        <div class="card">
      <div class="card-content">
        <div class="row">
          <div class="input-field col s12">
             <select multiple>
              <option value="" disabled>Choose your option</option>
              <option v-for="role in this.roles" :value="role._id" >{{ role._id }}</option>
              
            </select>
        <label>Roles</label>
        </div>
</div>
    </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      roles: Roles.getAllRoles().fetch()
    };
  },
  mounted() {
      this.roles = Roles.getAllRoles().fetch();
       var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, {});
  },
  methods: {
    }
};
</script>
