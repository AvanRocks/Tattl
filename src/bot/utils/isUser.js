const knownUsers = new Map([
  ["Leon", 553740418865561631],
  ["George", 325877002878058498],
]);

function isUser(user, allowedUserName) {
  const userId = knownUsers.get(allowedUserName);
  if (!userId) {
    return new Error("Unknown user");
  }

  return user.id == userId;
}

module.exports = isUser;
