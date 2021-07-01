const knownUsers = new Map([
  ["Leon", 553740418865561631],
  ["George", 325877002878058498],
]);

function isUser(user, allowedUserName) {
  if (knownUsers.has(allowedUserName)) {
    const userId = knownUsers.get(allowedUserName);
    return user.id == userId;
  } else {
    return false;
  }
}

module.exports = isUser;
