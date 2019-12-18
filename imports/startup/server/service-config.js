ServiceConfiguration.configurations.upsert(
    { service: 'github' },
    {
      $set: {
        loginStyle: "popup",
        clientId: Meteor.settings.public.github_client_id, // See table below for correct property name!
        secret: Meteor.settings.public.github_secret
      }
    }
);

ServiceConfiguration.configurations.upsert(
  { service: 'google' },
    {
      $set: {
        loginStyle: "popup",
        clientId: Meteor.settings.public.google_client_id, // See table below for correct property name!
        secret: Meteor.settings.public.google_secret
      }
});

ServiceConfiguration.configurations.upsert(
  { service: 'twitter' },
    {
      $set: {
        loginStyle: "popup",
        consumerKey: Meteor.settings.public.google_client_id, // See table below for correct property name!
        secret: Meteor.settings.public.google_secret
      }
});

ServiceConfiguration.configurations.upsert(
  { service: 'facebook' },
    {
      $set: {
        loginStyle: "popup",
        appId: '2215688035391766', 
        secret: 'b3badac585ead2c09b6b8ac92e01c581'
      }
});