function updateEmployeeRecord(employee, updates) {
    return { ...employee, ...updates };
  }
  
  const employee = { name: 'John', position: 'Developer', salary: 50000 };
  const updates = { position: 'Senior Developer', salary: 60000 };
  console.log(updateEmployeeRecord(employee, updates));
  // Output: { name: 'John', position: 'Senior Developer', salary: 60000 }
  