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
        <ul class="right hide-on-med-and-down">
          <li>
            <router-link  :to="{ name: 'register' }">
              Register
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'login' }">
              Login
            </router-link>
          </li>
          <li>
            <router-link  :to="{ name: 'books' }">
              Books
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'person' }">
              Person
            </router-link>
          </li>
          <li><a class="waves-effect waves-light btn">Log Off</a></li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="side-menu">
      <li>
        <router-link :to="{ name: 'books' }">Books</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'person' }">Person</router-link>
      </li>
    </ul>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
