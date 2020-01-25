<template>
  <div class="container">
    <div class="page-header">
      <h1>Roles Managment</h1>
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

    <div class="card">
      <div class="card-content">
        <div class="row">
          <button data-target="createRoleModal" class="btn modal-trigger">
            Create Role
          </button>
          <button data-target="deleteRoleModal" class="btn modal-trigger red">
            Delete Roles
          </button>
        </div>
        <div class="row">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      selectedRoles: undefined,
      roleToDelete: undefined,
      newRole: undefined,
      users: undefined
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
    showUsers(evt) {
      console.log(evt.target.value);
      this.users = Roles.getUsersInRole(evt.target.value);
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
    }
  },
  mounted() {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {
      closeOnClick: true,
      hover: true
    });
    let modals = document.querySelectorAll(".modal");
    let modalsInstances = M.Modal.init(modals, {});
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
