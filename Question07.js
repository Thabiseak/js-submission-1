function createPerson(name, age) {
    return {
      name,
      age,
      greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }
    };
  }
  
  const john = createPerson('John', 25);
  john.greet();
  