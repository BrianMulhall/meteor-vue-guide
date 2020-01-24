import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Persons } from './persons.js';


export const createPerson = new ValidatedMethod({
  name: 'persons.createPerson',
  validate: new SimpleSchema({
    name: { type: String },
    age: { type: Number, min: 0, max: 120 },
    weight: { type: Number, min: 0, max: 1000 },
    height: { type: Number, min: 0, max: 100 },
  }).validator(),
  run({
    name, age, weight, height,
  }) {
    console.log('running the meteor method');
    Persons.insert({
      ...{
        name, age, weight, height,
      },
      date: new Date(),
    });
  },
});
