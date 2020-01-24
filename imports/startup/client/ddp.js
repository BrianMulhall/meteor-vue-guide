import { DDP } from 'meteor/ddp-client';

DDP.onReconnect(function (connection) {
  console.log('ddp reconnect');
  console.log(connection);
});
