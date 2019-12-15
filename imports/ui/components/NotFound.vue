<template>
<main class="not-found">
    <h1>This Page Cannot be Found</h1>
    <p class="more-info">
        Sorry, but we can't the page you're looking for.<br>
        It might have been moved or deleted.<br>
        Check your spelling or click below to return to the homepage.
    </p>
    <div class="actions">
        <router-link class="btn waves-effect waves-light" tag="button" v-bind:to="{name: 'home'}"> Return to Home </router-link>
    </div>
</main>

</template>

<style>
.more-info{
    text-align:center;
}
</style>