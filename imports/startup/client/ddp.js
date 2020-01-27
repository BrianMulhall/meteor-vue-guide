import { Meteor } from 'meteor/meteor'
import { DDP } from 'meteor/ddp-client';

DDP.onReconnect(function (connection) {
  console.log('ddp reconnect');
  console.log(connection);
});

// log sent messages
const _send = Meteor.connection._send;

Meteor.connection._send = function (obj) {
  console.log("send", obj);
  _send.call(this, obj);
};

// log received messages
Meteor.connection._stream.on('message', function (message) {
  console.log("receive", JSON.parse(message));
});
