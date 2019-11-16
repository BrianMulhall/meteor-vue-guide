<template>
  <div>
    <nav>
      <router-link :to="{ name: 'dashboard' }" exact>Dashboard</router-link>
      <router-link :to="{ name: 'address' }">Address</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
    };
  }
}
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>