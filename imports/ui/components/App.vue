<template>
  <div>
    <nav>
       <div class="nav-wrapper">
       <router-link  class="brand-logo" :to="{ name: 'home' }" exact>Susco</router-link>
     
        <ul id="nav-mobile" class="right hide-on-med-and-down">
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
      <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style>
.router-link-active{
  color: rgba(255,255,255,.5);
  border:none;
}
</style>
