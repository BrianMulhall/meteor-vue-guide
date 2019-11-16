<template>

  <div>

    <div class="row">
      <div class="col-lg-12">
        <form  @submit.prevent="createPerson()">
          <div class="form-group form-group-lg">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
              required
              v-model.lazy="person.name"
            />
          </div>

          <div class="form-group form-group-lg">
            <label for="age">Age</label>
            <input
              type="number"
              class="form-control"
              id="age"
              placeholder="Age"
              required
              min="0"
              max="120"
              v-model.number="person.age"
            />
          </div>

          <div class="form-group form-group-lg">
            <label for="height">Height</label>
            <input
              type="number"
              class="form-control"
              id="height"
              placeholder="Height"
              required
              min="0"
              max="100"
              v-model.number="person.height"
            />
          </div>

          <div class="form-group form-group-lg">
            <label for="weight">Weight</label>
            <input
              type="number"
              class="form-control"
              id="weight"
              placeholder="Weight"
              required
              min="0"
              max="1000"
              v-model.number="person.weight"
            />
          </div>

          <button  type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      
      <div>  
        <pre>
          Name:   {{person.name}}
          Age:    {{person.age}}
          Height: {{person.height}}
          Weight: {{person.weight}}
          Persons Length: {{fetchPeople()}}
        </pre>
      </div>

    </div>

  </div>

</template>


<script>
import { Meteor } from 'meteor/meteor'
import { createPerson } from '../../api/persons/methods.js'
import { Persons } from '../../api/persons/persons.js'

export default {
  name: "Person",
  data () {
    return {
      person: {
        name: '',
        age: 0,
        height: 0,
        weight: 0
      },
      persons:[]
    }
  },
    methods: {
      createPerson: function(){
        createPerson.call( this.person);
      },
      fetchPeople: function(){
        return Persons.find({}).length;
      }

    },
     meteor: {
    // Subscriptions
      $subscribe: {
        'persons': [],
      },
      persons () {
        return Persons.find({});
      }
    },
    computed: {
      length () {
      return this.persons.length
      },
    }
  }
</script>