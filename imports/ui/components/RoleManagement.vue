<template>
  <div class="container">
    <div class="page-header">
      <h1>Roles Managment</h1>
    </div>

    <div class="card">
      <div class="card-content">
        <form @submit.prevent="updateRole">
          <div class="input-field col s12">
            <select multiple v-model="selectedRoles">
              <option value="" disabled>Choose your option</option>
              <option v-for="role in this.roles" selected :value="role._id">{{
                role._id
              }}</option>
            </select>
            <label>Roles</label>
          </div>

          <button class="btn waves-effect waves-light" type="submit">
            Update Roles
            <i class="material-icons right">send</i>
          </button>
        </form>
      </div>
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

          <button
            class="btn waves-effect waves-light"
            type="submit"
            :disabled="newRole == '' ? '' : disabled"
          >
            Create Roles
            <i class="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { _ } from "underscore";

export default {
  data() {
    return {
      roles: Roles.getAllRoles().fetch(),
      currentRoles: Roles.getRolesForUser(Meteor.userId()),
      selectedRoles: [],
      newRole: ""
    };
  },
  methods: {
    updateRole(evt) {
      Meteor.call(
        "roles.addRoles",
        [Meteor.userId()],
        this.selectedRoles,
        (err, res) => {
          if (err) {
            this.$toasted.error(err.reason);
          } else {
            this.$toasted.info("User's role has been updated successfully");
          }
        }
      );
    },
    createRole(evt) {
      Meteor.call("roles.createRole", this.newRole, (err, res) => {
        if (err) {
          this.$toasted.error(err.reason);
        } else {
          this.$toasted.info("New role has been created successfully");
        }
      });
    }
  },
  mounted() {
    this.roles = Roles.getAllRoles().fetch();
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {
      closeOnClick: true,
      hover: true
    });
    this.$autorun(() => {
      this.currentRoles = Roles.getRolesForUser(Meteor.userId());
    });
  }
};
</script>
