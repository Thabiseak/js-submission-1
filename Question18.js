function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  const number = 5; // Example number
  console.log(factorial(number)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
  