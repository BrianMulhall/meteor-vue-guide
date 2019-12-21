<template>
  <main class="not-found">
    <div class="card">
      <div class="card-content">
        <h1 class="center-align">This Page Cannot be Found</h1>
        <p class="center-align more-info">
          Sorry, but we can't the page you're looking for.<br />
          It might have been moved or deleted.<br />
          Check your spelling or click below to return to the homepage.
        </p>
        <div class="actions center-align ">
          <router-link class="btn waves-effect waves-light" tag="button" v-bind:to="{ name: 'home' }">
            Return to Home
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.more-info {
  text-align: center;
}
</style>
