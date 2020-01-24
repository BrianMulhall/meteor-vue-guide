<template>
  <div class="container">
    <div class="page-header">
      <h1>Roles Managment</h1>
    </div>

    <div class="card">
      <div class="card-content">
        <form @submit.prevent="createRole">
          <div class="input-field col s12">
            <input
              id="newRole"
              type="text"
              class="validate"
              v-model="newRole"
            />
            <label>New Role</label>
          </div>

          <button class="btn waves-effect waves-light" type="submit">
            Create Roles
            <i class="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>

    <div class="card">
      <div class="card-content">
        <form @submit.prevent="deleteRole">
          <div class="input-field col s12">
            <select v-model="selectedRoles" @change="showUsers($event)">
              <option value="" disabled>Choose your option</option>
              <option v-for="role in this.roles" selected :value="role._id">{{
                role._id
              }}</option>
            </select>
            <label>Roles</label>
          </div>
          <table class="responsive-table striped">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zipcode</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="user in users">
                <td>{{ user.username }}</td>
                <td>{{ user.address }}</td>
                <td>{{ user.city }}</td>
                <td>{{ user.state }}</td>
                <td>{{ user.zipcode }}</td>
              </tr>
            </tbody>
          </table>
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
      selectedRoles: [],
      newRole: "",
      users: undefined
    };
  },
  methods: {
    deleteRole(evt) {
      Meteor.call("roles.deleteRole", this.selectedRoles[0], (err, res) => {
        if (err) {
          this.$toasted.error(err.reason);
        } else {
          this.$toasted.info("Role has been deleted successfully");
          this.selectedRoles = [];
          this.roles = Roles.getAllRoles().fetch();
        }
      });
    },
    createRole(evt) {
      Meteor.call("roles.createRole", this.newRole, (err, res) => {
        if (err) {
          this.$toasted.error(err.reason);
        } else {
          this.$toasted.info("New role has been created successfully");
          this.newrole = "";
          this.roles = Roles.getAllRoles().fetch();
        }
      });
    },
    showUsers(evt) {
      console.log(evt.target.value);
      this.users = Roles.getUsersInRole(evt.target.value);
    }
  },
  mounted() {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {
      closeOnClick: true,
      hover: true
    });
  },
  meteor: {
    currentRoles() {
      return Roles.getRolesForUser(Meteor.userId());
    },
    roles() {
      return Roles.getAllRoles().fetch();
    }
  }
};
</script>
