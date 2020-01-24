import { Meteor } from 'meteor/meteor';
import { Persons } from '../persons.js';

Meteor.publish('persons', function () {
  return Persons.find();
});
