function registerUser(users, newUser) {
    const existingUser = users.some(user => user.username === newUser.username);
    if (!existingUser) {
      users.push(newUser);
    }
    return users;
  }
  
  // Usage is the same as in task 19
  