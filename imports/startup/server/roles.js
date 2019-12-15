

if(Meteor.roles.find({}).fetch().length == 0){

    Roles.createRole('user');
    Roles.createRole('admin');
}


