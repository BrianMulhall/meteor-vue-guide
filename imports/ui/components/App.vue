<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <router-link class="brand-logo" :to="{ name: 'home' }">
          <i class="material-icons">cloud</i>
          Meteor Vue App
        </router-link>
        <a href="#" data-target="side-menu" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>

        <!-- User Profile Dropdown -->
        <ul id="userProfileDropdown" class="dropdown-content">
          <router-link tag="li" class="col" :to="{ name: 'changeUsername' }">
            <a>Change Username</a>
          </router-link>
          <router-link tag="li" class="col" :to="{ name: 'changePassword' }">
            <a>Change Password</a>
          </router-link>
          <router-link tag="li" class="col" :to="{ name: 'addRemoveEmails' }">
            <a>Add/Remove Emails</a>
          </router-link>
          <router-link tag="li" class="col" :to="{ name: 'userProfile' }">
            <a>Update User Profile</a>
          </router-link>
        </ul>

        <ul class="right hide-on-med-and-down">
          <template v-if="this.isLoggedIn">
            <router-link tag="li" class="col" :to="{ name: 'createUser' }">
              <a>Create User</a>
            </router-link>

            <router-link tag="li" class="col" :to="{ name: 'roleManagement' }">
              <a>Role Management</a>
            </router-link>

            <router-link tag="li" class="col" :to="{ name: 'person' }">
              <a>Person</a>
            </router-link>

            <li>
              <a
                class="dropdown-trigger"
                href="#!"
                data-target="userProfileDropdown"
              >
                User Profile
                <i class="material-icons right">arrow_drop_down</i>
              </a>
            </li>

            <li>
              <a class="waves-effect waves-light btn" @click.prevent="logOff">
                Log Off
              </a>
            </li>
          </template>

          <template v-else>
            <li>
              <router-link :to="{ name: 'forgotPassword' }"
                >Forgot Password?</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'register' }"
                ><i class="material-icons">person_add</i></router-link
              >
            </li>
          </template>
        </ul>
      </div>
    </nav>

    <!-- SIDE NAV -->
    <ul class="sidenav" id="side-menu">
      <template v-if="this.isLoggedIn">
        <router-link tag="li" class="col" :to="{ name: 'createUser' }">
          <a>Create User</a>
        </router-link>

        <router-link tag="li" class="col" :to="{ name: 'roleManagement' }">
          <a>Role Management</a>
        </router-link>

        <router-link tag="li" class="col" :to="{ name: 'person' }">
          <a>Person</a>
        </router-link>

        <li>
          <a
            class="dropdown-trigger"
            href="#!"
            data-target="mobileUserProfileDropdown"
          >
            User Profile
            <i class="material-icons right">arrow_drop_down</i>
          </a>
        </li>

        <!-- User Profile Dropdown -->
        <ul id="mobileUserProfileDropdown" class="dropdown-content">
          <router-link tag="li" class="col" :to="{ name: 'changeUsername' }">
            <a>Change Username</a>
          </router-link>
          <router-link tag="li" class="col" :to="{ name: 'changePassword' }">
            <a>Change Password</a>
          </router-link>
          <router-link tag="li" class="col" :to="{ name: 'addRemoveEmails' }">
            <a>Add/Remove Emails</a>
          </router-link>
          <router-link tag="li" class="col" :to="{ name: 'userProfile' }">
            <a>Update User Profile</a>
          </router-link>
        </ul>

        <router-link tag="li" class="col" :to="{ name: 'about' }">
          <a> <i class="material-icons">info</i></a>
        </router-link>

        <li>
          <a class="waves-effect waves-light btn" @click.prevent="logOff">
            Log Off
          </a>
        </li>
      </template>
      <template v-else>
        <router-link tag="li" class="col" :to="{ name: 'register' }">
          <a>Register</a>
        </router-link>

        <router-link tag="li" class="col" :to="{ name: 'login' }">
          <a>Login</a>
        </router-link>
      </template>
    </ul>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";
import Vue from "vue";

export default {
  data() {
    return {
      userId: "",
      isLoggedIn: false
    };
  },
  methods: {
    logOff: function(event) {
      Meteor.logout(
        function(err) {
          if (err) {
            this.$toasted.error(err.reason);
          } else {
            this.$router.push({ path: "/login" });
          }
        }.bind(this)
      );
    }
  },
  computed: {},
  mounted() {
    this.$autorun(() => {
      this.isLoggedIn = Meteor.userId() != null;
      this.userId = Meteor.userId();
    });
    M.AutoInit();
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.75s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.dropdown-content {
  width: max-content !important;
  height: auto !important;
}
</style>
