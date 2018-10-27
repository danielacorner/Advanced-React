// // user
// {
//   name: 'Wes',
//   permission: ['ADMIN', 'ITEMUPDATE']
// }
// // check if they have any one of these:
// ['PERMISSIONUPDATE','ADMIN']

function hasPermission(user, permissionsNeeded) {
  const matchedPermissions = user.permissions.filter(permissionTheyHave =>
    permissionsNeeded.includes(permissionTheyHave)
  );
  if (!matchedPermissions.length) {
    throw new Error(`You do not have sufficient permissions

      : ${permissionsNeeded}

      You Have:

      ${user.permissions}
      `);
  }
}

exports.hasPermission = hasPermission;
