// This section sets up some basic app metadata, the entire section is optional.
App.info({
  id: 'com.susco.meteor',
  version: '0.1.0',
  name: 'meteor-vue',
  description: 'Meteor Application',
  author: 'Brian Mulhall',
  email: 'brian.e.mulhall@gmail.com',
});


App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');


// this is for access to the google maps api
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');

// Pass preferences for a particular PhoneGap/Cordova plugin.
App.configurePlugin('cordova-plugin-googleplus', {
  REVERSED_CLIENT_ID: 'com.susco.meteor',
});
