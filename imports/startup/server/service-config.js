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