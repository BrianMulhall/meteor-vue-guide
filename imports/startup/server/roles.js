import { Roles } from 'alanning:roles'

Roles.createRole('user');
Roles.createRole('admin');

Roles.addUsersToRoles(admin, 'admin', null);