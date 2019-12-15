import { Accounts } from 'meteor/accounts-base'
import '../../api/persons/persons.js'
import '../../api/persons/methods.js'
import '../../api/persons/server/publications.js'

import '../../api/items/items.js'
import '../../api/items/methods.js'
import '../../api/items/server/publications.js'

import '../../api/accounts/methods.js'

import '../../api/users/server/publications.js'

import '../../api/roleAssignment/server/publications.js'
import './roles.js'
import './accounts.js'

let adminAccount = Accounts.findUserByUsername('admin');

if(!adminAccount){
    const id = Accounts.createUser({
        username: 'admin',
        email: 'brian.mulhall@susco.net',
        password: 'password123',
    });

    Roles.addUsersToRoles(id, 'admin', null);
}
