Meteor.methods({

  'roles.addRoles'(userIds, roles) {
    check(userIds, [String]);
    check(roles, [String]);

    var loggedInUser = Meteor.user();

    if (!loggedInUser || !Roles.userIsInRole(loggedInUser, ['admin'], null)) {
      throw new Meteor.Error('access-denied', "Access denied");
    }

    Roles.setUserRoles(userIds, roles);
  },

  'roles.removeRoles'(userIds, roles) {
    check(userIds, [String]);
    check(roles, [String]);

    var loggedInUser = Meteor.user();

    if (!loggedInUser || !Roles.userIsInRole(loggedInUser, ['admin'], null)) {
      throw new Meteor.Error('access-denied', "Access denied");
    }

    Roles.removeUsersFromRoles(userIds, roles);
  },

  'roles.getRolesForUser'(userId) {
    check(userId, String);

    var loggedInUser = Meteor.user();

    if (!loggedInUser || !Roles.userIsInRole(loggedInUser, ['admin'], null)) {
      throw new Meteor.Error('access-denied', "Access denied");
    }
    Roles.getGroupsForUser(userId);
  },

  'roles.getUsersForRoles'(roles) {
    check(roles, [String]);

    var loggedInUser = Meteor.user();

    if (!loggedInUser || !Roles.userIsInRole(loggedInUser, ['admin'], null)) {
      throw new Meteor.Error('access-denied', "Access denied");
    }
    Roles.getUsersinRoles(roles);
  }

})