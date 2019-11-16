import { Mongo } from 'meteor/mongo'
console.log("making the persons collection")
export const Persons = new Mongo.Collection('persons')