<template>
  <div class="container">
    <div class="page-header">
      <h1>About</h1>
    </div>
       <div class="card">
      <div class="card-content">
     
    <table>
        <thead>
          <tr>
              <th>Key</th>
              <th>Value</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Meteor Version</td>
            <td>{{this.version}}</td>
          </tr>
          <tr>
            <td>Connection Status</td>
            <td>{{this.connectionStatus}}</td>
          </tr>
          <tr>
            <td>Environment</td>
            <td>{{this.environment}}</td>
          </tr>


        </tbody>
      </table>
      </div>
    </div>

  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";

export default {
  data() {
    return {
      version: Meteor.release,
      connectionStatus: undefined,
      environment: (Meteor.isDevelopment ? "Development" : "Production"),
    };
  },
  methods: {
  },
  mounted() {
      this.$autorun(() => this.connectionStatus =  Meteor.status().status);
  },
  meteor: {
  }
  
};
</script>
