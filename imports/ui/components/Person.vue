<template>
  <div class="container">
    <div class="page-header">
      <h1>Creating a Person</h1>
    </div>
    <div class="row">
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
    <Grid v-bind:style="{height: '280px'}"
          v-bind:data-items="persons"
          v-bind:columns="columns"
          v-bind:edit-field="'inEdit'"
          @rowclick="rowClick"
          @itemchange="itemChange">
            <grid-toolbar>
            <div @click="closeEdit">
                <button title="Add new" class="k-button k-primary" @click='addRecord' >
                    Add new
                </button>
            </div>
        </grid-toolbar>
    </Grid>
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
       columns: [
                { field: 'name', title: 'name'},
                { field: 'age', title: 'Age' },
                { field: 'height', title: 'Height' },
                { field: 'weight', title: 'Weight' }
            ]
    };
  },
  methods: {
    createPerson: function() {
      createPerson.call(this.person);
    },
    fetchPeople: function() {
      return Persons.find({}).length;
    },
     onChange: function(ev) {
        var selected = $.map(ev.sender.select(), function(item) {
            return $(item).text();
        });

        console.log("Selected: " + selected.length + " item(s), [" + selected.join(", ") + "]");
      },
      onDataBinding: function(ev) {
          console.log("Grid data binding");
      },
      onDataBound: function(ev) {
          console.log("Grid data bound");
      },
      itemChange: function (e) {
            const data = this.persons.slice();
            const index = data.findIndex(d => d.ProductID === e.dataItem.ProductID);
            data[index] = { ...data[index], [e.field]: e.value };
            this.persons = data;
      },
      rowClick: function (e) {
            this.editID = e.dataItem.ProductID;
      },
      closeEdit(e) {
            if (e.target === e.currentTarget) {
                this.editID = null;
            }
      },
      addRecord() {
            const newRecord = { ProductID: this.persons.length + 1 };
            const data = this.persons.slice();
            data.unshift(newRecord);
            this.persons = data;
            this.editID = newRecord.ProductID;
      }
  },
  meteor: {
    // Subscriptions
    $subscribe: {
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
  }
};
</script>
