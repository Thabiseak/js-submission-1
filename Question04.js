const words = ["hello", "world", "javascript"];
const concatenatedString = words.reduce((acc, curr) => acc + " " + curr, "");
console.log(concatenatedString.trim());
