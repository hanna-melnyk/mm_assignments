// JS Basic
// 1. Print 1 - 135
const print135 = () => {
  for (let i = 1; i <= 135; i++) {
    console.log(i);
  }
}
// print135();


// 2. Print Odd 1 - 135

const printOdd135 = () => {
  for (let i = 1; i <= 135; i++) { // increment i until i <= 135
    if (i % 2 != 0) { //if i is an odd number, do:
      console.log(i); //print it
    }
  }
};

// printOdd135();


//3. Sum of printed numbers
const sumNumbers = () => {
  var cumulative = 0;
  for (let i = 1; i <= 135; i++) {
    cumulative += i;
    console.log(`Number is: ${i}. Sum: ${cumulative}`)
  }
}
// sumNumbers();


// 4. Print the elements of an array

let newArray = [1,2,3];
const printArrayNumbers = (array) => {
  for (const num of array) {
    console.log(num)
  }
}

printArrayNumbers(newArray);


// 5. Get Max
let newX = [1, -3, -1];

const findMax = (array) => {
  let max = newX[0];
  for (const num of array) {
     if (num > max) {
       max = num;
     }
     return max;
  }
}

// 6. Get Average

let newArrayXa = [2,1,3];
const getAverage = (array) => {
  let sum = 0;
  let counter = 0;
  for (const num of array) {
    counter ++;
    sum += num;
  }
  return sum / counter;
};

// console.log(getAverage(newArrayXa));

let newArrayXb = [2,-1,4,-3];
const eliminateNegatives = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      array[i] = 0;
    }
  }
  return array;
}

// console.log(eliminateNegatives(newArrayXb));

// 8. Number to String
let newArrayXc = [1, -4, 0, -1];

const numToStr = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      array[i] = 'String';
    }
  }
  return array;
}

console.log(numToStr(newArrayXc));


// JS Intermediate
// Largest number in Subarray

let arrayOfArrays = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
function largestInSubarray(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    var largestNumInI = array[i][0];
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] > largestNumInI) {
        largestNumInI = array[i][j];
      }
    }
    newArray[i] = largestNumInI;
  }
  return newArray;
}

// console.log(largestInSubarray(arrayOfArrays));


//Professional Algorithms
// Game of 3s
// Simplified Game of 3s
function gameOfThree(number) {
  while (number !== 1) { // Continue until the number is 1
    let adjustment = 0; // Adjustment to make the number divisible by 3


    if (number % 3 === 1) {
      adjustment = -1; // Subtract 1 if remainder is 1
    } else if (number % 3 === 2) {
      adjustment = 1; // Add 1 if remainder is 2
    }

    console.log(`${number}, ${adjustment}`); // Log current step
    number = (number + adjustment) / 3; // Adjust the number
  }
  console.log(1); // Print the final number, 1
}

gameOfThree(100);


// rFactorial vs iFactorial


//rFactorial
// Prompt user to enter a number to calculate the factorial
var num = prompt("rFactorial: What number do you want to find the factorial of?");


var rFactorial = function(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * rFactorial(n - 1);
  }
}

console.log(rFactorial(num));

// iFactorial

// Prompt user to enter a number to calculate the factorial
var num = prompt("iFactorial: What number do you want to find the factorial of?");


function iFactorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(iFactorial(num));
