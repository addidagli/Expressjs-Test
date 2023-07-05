const inputArray = [24, 56, 1, 25, 67, 24, 89, 21, 53, 24, 56];

// Function to return unique numbers
function getUniqueNumbers(array) {
    const count = array.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
  
    return array.filter(value => count[value] === 1).sort((a, b) => b - a);
  }

// Function to numbers multiplied by two
function multiplyByTwo(arr) {
  return arr.map(num => num * 2);
}

// Function to return odd numbers
function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}

// Function to return sum of the numbers
function getSumOfNumbers(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

// Function to return sum of numbers which can divide by three
function getSumOfNumbersDivisibleByThree(arr) {
  return arr.reduce((acc, num) => (num % 3 === 0 ? acc + num : acc), 0);
}

console.log("Unique numbers:", getUniqueNumbers(inputArray));
console.log("Numbers multiplied by two:", multiplyByTwo(inputArray));
console.log("Odd numbers:", getOddNumbers(inputArray));
console.log("Sum of all numbers:", getSumOfNumbers(inputArray));
console.log("Sum of numbers divisible by three:", getSumOfNumbersDivisibleByThree(inputArray));
