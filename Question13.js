function addTask(tasks, newTask) {
    return [...tasks, newTask];
  }
  
  const tasks = ['Buy groceries', 'Clean the house'];
  const updatedTasks = addTask(tasks, 'Pay bills');
  console.log(updatedTasks);
  