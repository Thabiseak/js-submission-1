const array = [4, 'hello', 3, true, 'Uki', 5];
const squaredSum = array
  .filter(item => typeof item === 'number')
  .reduce((acc, num) => acc + num ** 2, 0);
console.log(squaredSum);
