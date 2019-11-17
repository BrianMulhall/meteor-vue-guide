// This section sets up some basic app metadata, the entire section is optional.
App.info({
    id: 'com.susco.meteor_tutorial',
    name: 'meteor-tutorial-ff108',
    description: 'my MeteorJS application',
    author: "Brian Mulhall",
    email: "brian.e.mulhall@gmail.com",
  });
  
  App.configurePlugin('phonegap-plugin-push', {
    SENDER_ID: 817724924050
  });
  
  // Set PhoneGap/Cordova preferences.
  App.setPreference('BackgroundColor', '0xff0000ff');
  App.setPreference('HideKeyboardFormAccessoryBar', true);
  App.setPreference('Orientation', 'default');
  App.setPreference('Orientation', 'all', 'ios');
  
  
  // this is for access to the google maps api
  App.accessRule('*.google.com/*');
  App.accessRule('*.googleapis.com/*');
  App.accessRule('*.gstatic.com/*');
  
  
  // Add custom tags for a particular PhoneGap/Cordova plugin to the end of the
  // generated config.xml. 'Universal Links' is shown as an example here.
  App.appendToConfig(`
    <universal-links>
      <host name="localhost:3000" />
    </universal-links>
  `);
  