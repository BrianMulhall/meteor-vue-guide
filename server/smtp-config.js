import { Meteor } from 'meteor/meteor';

const smtp = {
  username: Meteor.settings.public.sendgrid_username,
  password: Meteor.settings.public.sendgrid_password,
  server: Meteor.settings.public.sendgrid_host,
  port: Meteor.settings.public.sendgrid_port
};

process.env.MAIL_URL = 'smtp://' + 
                        encodeURIComponent(smtp.username) + ':' +
                        encodeURIComponent(smtp.password) + '@' +
                        encodeURIComponent(smtp.server) + ':' +
                        smtp.port; 

console.log('smtp server config', process.env.MAIL_URL );
