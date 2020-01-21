Meteor.methods({
    'roles.createRole'(newRole) {
        check(newRole, String);

        var loggedInUser = Meteor.user();

        if (!loggedInUser || !Roles.userIsInRole(loggedInUser, ['admin'], null)) {
            throw new Meteor.Error('access-denied', "Access Denied: Only Admins can Create a Role");
        }

        Roles.createRole(newRole, { unlessExists: true });
    },
    'roles.deleteRole'(role) {
        check(role, String);

        var loggedInUser = Meteor.user();

        if (!loggedInUser || !Roles.userIsInRole(loggedInUser, ['admin'], null)) {
            throw new Meteor.Error('access-denied', "Access Denied: Only Admins can Delete a Role");
        }

        Roles.deleteRole(role);
    }
})