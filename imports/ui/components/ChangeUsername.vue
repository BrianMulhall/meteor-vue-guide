<template>
  <div class="container">
    <div class="page-header">
      <h1>Update Username</h1>
    </div>

    <div class="card">
      <div class="card-content">
        <div class="row">
          <div class="input-field col s12">
            <label class="active" for="username">Username</label>
            <input type="text" readonly class="validate" v-model="username" />
          </div>
        </div>

        <!-- Modal -->
        <div id="updateModal" class="modal">
          <div class="modal-content">
            <div class="input-field col s12">
              <label class="active" for="username">New Username</label>
              <input type="text" class="validate" v-model="newUsername" />
            </div>
          </div>
          <div class="modal-footer">
            <button
              @click.prevent="closeModal"
              class="btn waves-effect waves-light red"
              type="button"
            >
              Close
            </button>
            <button
              @click.prevent="updateUsername"
              class="btn waves-effect waves-light"
              type="button"
            >
              Save
            </button>
          </div>
        </div>

        <button data-target="updateModal" class="btn modal-trigger">
          Update Username
        </button>
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
      username: "",
      newUsername: ""
    };
  },
  mounted() {
    let elems = document.querySelectorAll(".modal");
    let instances = M.Modal.init(elems, {});
  },
  methods: {
    updateUsername(evt) {
      Meteor.call(
        "accounts.ChangeUsername",
        {
          userId: Meteor.userId(),
          newUsername: this.newUsername
        },
        (err, res) => {
          if (err) {
            this.$toasted.error(err.reason);
          } else {
            this.newUsername = "";
            this.$toasted.info("Username update successfully");
          }
          let elem = document.querySelectorAll("#updateModal");
          let instance = M.Modal.getInstance(elem[0]);
          instance.close();
        }
      );
    },
    closeModal(evt) {
      let elem = document.querySelectorAll("#updateModal");
      let instance = M.Modal.getInstance(elem[0]);
      instance.close();
    }
  },
  meteor: {
    username() {
      return Meteor.user().username;
    }
  }
};
</script>
