import { DDP } from 'meteor/ddp-client'
import { Meteor } from 'meteor/meteor'

Meteor.onConnection(function (cb) {
    console.log('onConnection');
    console.log(cb);
});

DDP.onReconnect(function (connection) {
    console.log('ddp reconnect');
    console.log(connection);
});