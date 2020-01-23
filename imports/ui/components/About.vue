<template>
  <div class="container">
    <div class="page-header">
      <h1>About</h1>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="row">
          <table class="responsive-table striped">
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Meteor Version</td>
                <td>{{ meteorVersion }}</td>
              </tr>
              <tr>
                <td>Vue Version</td>
                <td>{{ vueVersion }}</td>
              </tr>
              <tr>
                <td>Connection Status</td>
                <td>{{ connectionStatus }}</td>
              </tr>
              <tr>
                <td>Environment</td>
                <td>{{ environment }}</td>
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
  mounted() {},
  meteor: {
    connectionStatus() {
      return Meteor.status().status.toUpperCase();
    },
    meteorVersion() {
      return Meteor.release.split("@")[1];
    },
    environment() {
      return Meteor.isDevelopment ? "Development" : "Production";
    }
  }
};
</script>
