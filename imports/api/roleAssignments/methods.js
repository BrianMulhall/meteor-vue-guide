Meteor.methods({
    updateRoles: function (targetUserId, roles) {
      check(targetUserId, String);
      check(roles, [String]);
  
      var loggedInUser = Meteor.user();
  
      if (!loggedInUser || !Roles.userIsInRole(loggedInUser, ['admin'], null)) {
        throw new Meteor.Error('access-denied', "Access denied");
      }
  
      Roles.setUserRoles(targetUserId, roles, null);
    }
  })