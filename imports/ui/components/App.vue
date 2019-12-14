<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <router-link class="brand-logo" :to="{ name: 'home' }">
          <i class="material-icons">cloud</i>
          Susco
        </router-link>
        <a href="#" data-target="side-menu" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul v-if="this.isLoggedIn" class="right hide-on-med-and-down">
          
            <router-link tag="li" class="col" :to="{ name: 'books' }">
              <a>Books</a>
            </router-link>

            <router-link tag="li" class="col" :to="{ name: 'person' }">
              <a>Person</a>
            </router-link>

            <li>
              <a class="waves-effect waves-light btn" @click.prevent="logOff"
                >Log Off</a
              >
            </li>
          
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="side-menu">
      <router-link tag="li" class="col" :to="{ name: 'register' }">
        <a>Register</a>
      </router-link>

      <router-link tag="li" class="col" :to="{ name: 'login' }">
        <a>Login</a>
      </router-link>

      <router-link tag="li" class="col" :to="{ name: 'books' }">
        <a>Books</a>
      </router-link>

      <router-link tag="li" class="col" :to="{ name: 'person' }">
        <a>Person</a>
      </router-link>
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
      userId: Meteor.userId(),
    };
  },
  methods: {
    logOff: function(event) {
      Meteor.logout(function(err){
        if(err) console.log(err);
      });
      this.$store.commit('toggleLoggedInStatus',false);
      this.$router.push({ path: '/login' })
    }
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.getLoggedInStatus
    }
  },

  mounted() {
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
</style>
