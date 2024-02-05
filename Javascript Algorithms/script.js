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
