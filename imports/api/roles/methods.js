Meteor.methods({
    'roles.createRole'(newRole) {
        check(newRole, String);

        var loggedInUser = Meteor.user();

        if (!loggedInUser || !Roles.userIsInRole(loggedInUser, ['admin'], null)) {
            throw new Meteor.Error('access-denied', "Access Denied: Only Admins can Create a Role");
        }

        let existingRoles = Roles.getAllRoles().fetch();

        var existingRole = _.find(existingRoles, function (r) { return r._id == newRole });

        if (existingRole) {
            throw new Meteor.Error('Error', "Role already exists, please choose a unique name");
        }

        Roles.createRole(role);
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