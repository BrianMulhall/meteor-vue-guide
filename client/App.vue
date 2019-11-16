<template>
  <div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <router-link :to="{ name: 'dashboard' }" exact>Dashboard</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'address' }">Address</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'live-odds' }">Bettings Odds</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date()
    };
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}

.router-link-active {
  border-bottom-color: bisque;
}
</style>