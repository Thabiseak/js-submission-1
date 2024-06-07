function reverseArray(arr) {
    return arr.slice().reverse();
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const reversedArray = reverseArray(originalArray);
  console.log(reversedArray);
  