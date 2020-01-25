<template>
  <div class="container">
    <div class="page-header">
      <h1>Role Managment</h1>
    </div>

    <!-- Create Role Modal -->
    <div id="createRoleModal" class="modal">
      <div class="modal-content">
        <div class="input-field col s12">
          <label class="active" for="username">New Role</label>
          <input type="text" class="validate" v-model="newRole" />
        </div>
      </div>
      <div class="modal-footer">
        <button
          @click.prevent="closeCreateRoleModal"
          class="btn waves-effect waves-light red"
          type="button"
        >
          Close
        </button>
        <button
          @click.prevent="createRole"
          class="btn waves-effect waves-light"
          type="button"
        >
          Create
        </button>
      </div>
    </div>

    <!-- Delete Role Modal -->
    <div id="deleteRoleModal" class="modal">
      <div class="modal-content">
        <div class="input-field col s12">
          <select v-model="roleToDelete">
            <option value="" disabled>Choose your option</option>
            <option v-for="role in this.roles" selected :value="role._id">{{
              role._id
            }}</option>
          </select>
          <label>Roles</label>
        </div>
      </div>
      <div class="modal-footer">
        <button
          @click.prevent="closeDeleteRoleModal"
          class="btn waves-effect waves-light red"
          type="button"
        >
          Close
        </button>
        <button
          @click.prevent="deleteRole"
          class="btn waves-effect waves-light"
          type="submit"
        >
          Delete
        </button>
      </div>
    </div>

    <!-- Add User To Role Modal -->
    <div id="addUserToRoleModal" class="modal">
      <div class="modal-content">
        <div class="row">
          <div class="input-field col s12">
            <select v-model="roleToAdd">
              <option value="" disabled>Choose your option</option>
              <option v-for="role in this.roles" selected :value="role._id">{{
                role._id
              }}</option>
            </select>
            <label>Roles</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              type="text"
              id="autocomplete-input"
              class="autocomplete"
              v-model="userToAdd"
            />
            <label for="autocomplete-input">Users</label>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button
          @click.prevent="closeAddUserToRoleModal"
          class="btn waves-effect waves-light red"
          type="button"
        >
          Close
        </button>
        <button
          @click.prevent="addUserToRole"
          class="btn waves-effect waves-light"
          type="submit"
        >
          Save
        </button>
      </div>
    </div>

    <div class="card">
      <div class="card-content">
        <div class="row">
          <button data-target="createRoleModal" class="btn modal-trigger">
            Create Role
          </button>
          <button data-target="deleteRoleModal" class="btn modal-trigger red">
            Delete Roles
          </button>
          <button
            data-target="addUserToRoleModal"
            class="btn modal-trigger blue"
          >
            Add User to Role
          </button>
        </div>
        <div id="tableSection" class="row">
          <h5>View Users By Role</h5>
          <div class="input-field col s12">
            <select v-model="selectedRoles" @change="showUsers($event)">
              <option value="" disabled>Choose your option</option>
              <option v-for="role in this.roles" selected :value="role._id">{{
                role._id
              }}</option>
            </select>
            <label>Roles</label>
          </div>
        </div>
        <div class="row" v-if="usersInRole.length > 0">
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
              <tr v-for="user in usersInRole">
                <td>{{ user.username }}</td>
                <td>{{ user.address }}</td>
                <td>{{ user.city }}</td>
                <td>{{ user.state }}</td>
                <td>{{ user.zipcode }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Meteor } from "meteor/meteor";

export default {
  data() {
    return {
      selectedRoles: undefined,
      roleToDelete: undefined,
      newRole: undefined,
      usersInRole: [],
      roleToAdd: "",
      userToAdd: ""
    };
  },
  methods: {
    deleteRole(evt) {
      Meteor.call("roles.deleteRole", this.roleToDelete, (err, res) => {
        if (err) {
          this.$toasted.error(err.reason);
        } else {
          this.$toasted.info("Role has been deleted successfully");
          let elem = document.querySelectorAll("#deleteRoleModal");
          let instance = M.Modal.getInstance(elem[0]);
          instance.close();
        }
      });
    },
    createRole(evt) {
      Meteor.call("roles.createRole", this.newRole, (err, res) => {
        if (err) {
          this.$toasted.error(err.reason);
        } else {
          this.$toasted.info("New role has been created successfully");
          let elem = document.querySelectorAll("#createRoleModal");
          let instance = M.Modal.getInstance(elem[0]);
          instance.close();
        }
      });
    },
    addUserToRole(evt) {
      let userDoc = Meteor.users.find({ username: this.userToAdd }).fetch();

      if (!userDoc) this.$toasted.error("Unable to find a user by that name");

      Meteor.call(
        "roles.addUserToRole",
        userDoc[0]._id,
        this.roleToAdd,
        (err, res) => {
          if (err) {
            this.$toasted.error(err.reason);
          } else {
            this.$toasted.info(
              "New role has been added to the selected user successfully"
            );
            let elem = document.querySelectorAll("#addUserToRoleModal");
            let instance = M.Modal.getInstance(elem[0]);
            instance.close();
          }
        }
      );
    },
    showUsers(evt) {
      console.log(evt.target.value);
      this.usersInRole = Roles.getUsersInRole(evt.target.value).fetch();
    },
    closeCreateRoleModal(evt) {
      let elem = document.querySelectorAll("#createRoleModal");
      let instance = M.Modal.getInstance(elem[0]);
      instance.close();
    },
    closeDeleteRoleModal(evt) {
      let elem = document.querySelectorAll("#deleteRoleModal");
      let instance = M.Modal.getInstance(elem[0]);
      instance.close();
    },
    closeAddUserToRoleModal() {
      let elem = document.querySelectorAll("#addUserToRoleModal");
      let instance = M.Modal.getInstance(elem[0]);
      instance.close();
    }
  },
  mounted() {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});

    let modals = document.querySelectorAll(".modal");
    let modalsInstances = M.Modal.init(modals, {});

    var elems = document.querySelectorAll(".autocomplete");
    var instances = M.Autocomplete.init(elems, {
      data: this.users,
      onAutocomplete: val => {
        this.userToAdd = val;
      }
    });
  },
  meteor: {
    currentRoles() {
      return Roles.getRolesForUser(Meteor.userId());
    },
    roles() {
      return Roles.getAllRoles().fetch();
    },
    users() {
      return Meteor.users
        .find()
        .fetch()
        .map(u => u.username)
        .reduce((o, key) => ({ ...o, [key]: null }), {});
    }
  }
};
</script>

<style>
#tableSection {
  padding-top: 4em;
}
</style>
