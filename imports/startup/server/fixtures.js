if(Meteor.roles.find({}).fetch().length == 0){
    console.log('adding roles')
    Roles.createRole('user');
    Roles.createRole('supervisor');
    Roles.createRole('siteAdmin');
}

let adminAccount = Accounts.findUserByUsername('admin');

if(!adminAccount){

    console.log('adding an admin account')

    const id = Accounts.createUser({
        username: 'admin',
        email: 'brian.mulhall@susco.net',
        password: 'password123',
    });
    console.log('adding admin account into admin role')
    Roles.addUsersToRoles(id, 'admin', null);
}



