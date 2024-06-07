function registerUser(users, newUser) {
    const existingUser = users.find(user => user.username === newUser.username);
    if (!existingUser) {
      users.push(newUser);
    }
    return users;
  }
  
  const usersArray = [
    { username: 'alice', email: 'alice@example.com' },
    { username: 'bob', email: 'bob@example.com' }
  ];
  
  const newUser = { username: 'charlie', email: 'charlie@example.com' };
  const updatedUsers = registerUser(usersArray, newUser);
  console.log(updatedUsers);
  