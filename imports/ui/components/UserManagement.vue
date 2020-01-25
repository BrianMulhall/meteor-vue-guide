<template>
  <div class="container">
    <div class="page-header">
      <h1>User Managment</h1>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="row">
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
                <td>
                  <button
                    @click.prevent="openShowRolesModal(user._id)"
                    class="btn-small modal-trigger"
                    data-target="showRolesModal"
                  >
                    Show Roles
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Show Roles Modal -->
    <div id="showRolesModal" class="modal">
      <div class="modal-content">
        <table class="responsive-table striped">
          <thead>
            <tr>
              <th>Current Roles</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="role in roles">
              <td>{{ role }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button
          @click.prevent="closeRolesModal"
          class="btn waves-effect waves-light red"
          type="button"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Roles } from "meteor/alanning:roles";

export default {
  data() {
    return {
      roles: undefined,
      allRoles: undefined,
      rolesToAdd: undefined,
      selectedUserId: undefined
    };
  },
  methods: {
    openShowRolesModal(userId) {
      this.selectedUserId = userId;
      this.roles = Roles.getRolesForUser(userId);
    },
    closeRolesModal() {
      let elem = document.querySelectorAll("#showRolesModal");
      let instance = M.Modal.getInstance(elem[0]);
      instance.close();
    }
  },
  mounted() {
    let modals = document.querySelectorAll(".modal");
    let modalsInstances = M.Modal.init(modals, {});
  },
  meteor: {
    users() {
      return Meteor.users.find({}).fetch();
    }
  }
};
</script>
