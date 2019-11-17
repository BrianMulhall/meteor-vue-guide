<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Susco</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'books' }">Books</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'address' }">Address</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'live-odds' }">Bettings Odds</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'person' }">Person</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
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

<style></style>
