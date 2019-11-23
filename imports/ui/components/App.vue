<template>
  <div>
    <nav>
      <div class="nav-wrapper">
          <router-link class="brand-logo" :to="{ name: 'home' }">Susco</router-link>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li>
            <router-link :to="{ name: 'books' }">Books</router-link>
            </li>
          <li>
            <router-link :to="{ name: 'address' }">Address</router-link>
            </li>
          <li>
            <router-link :to="{ name: 'live-odds' }">Bettings Odds</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'person' }">Person</router-link>
            </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li>
        <router-link :to="{ name: 'books' }">Books</router-link>
        </li>
      <li>
      <router-link :to="{ name: 'address' }">Address</router-link>
        </li>
      <li>
        <router-link :to="{ name: 'live-odds' }">Bettings Odds</router-link>
        </li>
      <li>
         <router-link :to="{ name: 'person' }">Person</router-link>
        </li>
    </ul>
    <transitions name="fade" mode="out-in">
      <router-view />
    </transitions>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    M.AutoInit(); // That way, it is only initialized when the component is mounted
  }
};
</script>

<style></style>
