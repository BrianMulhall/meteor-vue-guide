<template>
  <div class="container">
    <div class="page-header">
      <h1>Creating a Person</h1>
    </div>
       <div class="card">
      <div class="card-content">
      <div class="col s12">
        <form @submit.prevent="createPerson()">
          <div class="input-field col s12">
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              required
              v-model.lazy="person.name"
              class="validate"
            />
          </div>

          <div class="input-field col s12">
            <label for="age">Age</label>
            <input
              id="age"
              type="number"
              required
              min="0"
              max="120"
              v-model.number="person.age"
              class="validate"
            />
          </div>

          <div class="input-field col s12">
            <label for="height">Height</label>
            <input
              id="height"
              type="number"
              required
              min="0"
              max="100"
              v-model.number="person.height"
              class="validate"
            />
          </div>

          <div class="input-field col s12">
            <label for="weight">Weight</label>
            <input
              id="weight"
              type="number"
              required
              min="0"
              max="1000"
              v-model.number="person.weight"
              class="validate"
            />
          </div>
          <button class="btn waves-effect waves-light" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
          </button>
        </form>
        </div>
      </div>
    </div>
    <div style="margin-top:60px" class="row">
      <pre>
          Name:   {{ person.name }}
          Age:    {{ person.age }}
          Height: {{ person.height }}
          Weight: {{ person.weight }}
          Persons Length: {{ persons.length }}
        </pre
      >
    </div>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";
import { createPerson } from "../../api/persons/methods.js";
import { Persons } from "../../api/persons/persons.js";

export default {
  name: "Person",
  data() {
    return {
      person: {
        name: "",
        age: undefined,
        height: undefined,
        weight: undefined
      },
      persons: [],
    };
  },
  methods: {
    createPerson: function() {
      createPerson.call(this.person);
    },
    fetchPeople: function() {
      return Persons.find({}).length;
    },
  },
  meteor: {
    $lazy: true,
    // Subscriptions
    $subscribe: {
      // this is subscription with no parameters
      persons: []
    },
    persons() {
      return Persons.find({});
    }
  },
  computed: {
    length() {
      return this.persons.length;
    }
  },
  
};
</script>
