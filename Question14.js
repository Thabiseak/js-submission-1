function findCommonElements(arr1, arr2) {
    const commonElements = arr1.filter(item => arr2.includes(item));
    return commonElements;
  }
  
  const array1 = [1, 2, 31, 3];
  const array2 = [3, 4, 5, 31];
  
  console.log(findCommonElements(array1, array2)); // Output: [3]
  