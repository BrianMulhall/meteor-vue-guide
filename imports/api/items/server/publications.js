import { Items } from '../items.js'

Meteor.publish('items', function () {
    return Items.find();
  });