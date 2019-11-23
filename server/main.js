import { Meteor } from 'meteor/meteor';
import { Items } from '../imports/api/items/items.js'


import '../imports/startup/server/index.js'


if (Meteor.isServer) {

  var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true
  });

  Api.addCollection(Items);

}
