<template>
  <div class="container">
    <div class="page-header">
      <h1>About</h1>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="row">
          <table class="responsive-table">
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Meteor Version</td>
                <td>{{ this.meteorVersion }}</td>
              </tr>
              <tr>
                <td>Vue Version</td>
                <td>{{ this.vueVersion }}</td>
              </tr>
              <tr>
                <td>Connection Status</td>
                <td>{{ this.connectionStatus }}</td>
              </tr>
              <tr>
                <td>Environment</td>
                <td>{{ this.environment }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row">
          <button
            class="waves-effect waves-light btn"
            v-if="this.connectionStatus === 'CONNECTED'"
            @click.prevent="disconnect"
          >
            DISCONNECT
          </button>
          <button
            class="waves-effect waves-light btn"
            v-else
            @click.prevent="connect"
          >
            CONNECT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";
import Vue from "vue";

export default {
  data() {
    return {
      meteorVersion: Meteor.release.split("@")[1],
      connectionStatus: undefined,
      environment: Meteor.isDevelopment ? "Development" : "Production",
      vueVersion: Vue.version
    };
  },
  methods: {
    disconnect(evt) {
      Meteor.disconnect();
    },
    connect(evt) {
      Meteor.reconnect();
    }
  },
  mounted() {
    this.$autorun(() => {
      console.log("meteor status is changing");
      this.connectionStatus = Meteor.status().status.toUpperCase();
    });
  },
  meteor: {}
};
</script>
