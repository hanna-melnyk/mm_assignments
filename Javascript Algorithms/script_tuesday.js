// Basic Algorithms
// 1. Addition
// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5.
function addMultiplesThreeFive(start, end) {
  var sum = 0;
  for (let i = start; i <= end; i++) {

    var divisibleByThree = i % 3 == 0;
    var divisibleByFive = i % 5 == 0;
    var divisibleByBoth = divisibleByThree && divisibleByFive;

    if (divisibleByThree && !divisibleByBoth) {
      sum += i;
    }
    if (divisibleByFive && !divisibleByBoth) {
      sum += i;
    }
  }
  return sum;
}

console.log(addMultiplesThreeFive(200, 2700));

//2. Shift the Values
// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].
var arrayToShift = [2,1,6,4,-7];
function reverseValues(arrayToShift) {
  var result = [arrayToShift[arrayToShift.length-1]]; // set the first value of temp array to the last one


  for (let i = arrayToShift.length-2; i >= 0; i--) {
    result.push(arrayToShift[i])
  }
  return result;
}

console.log("Reversed array using .pop() : " +reverseValues(arrayToShift));

function reverseArray(arrayToShift) {
  let result = new Array(arrayToShift.length)
  let resultLength = result.length;
  for (let i = arrayToShift.length-1; i >= 0; i--) {
    result[resultLength-i] = arrayToShift[i];
  }
  return result;
}

console.log("Reversed array using a new array" + reverseArray([2,1,6,4,-7]))


function reversedArrayModified(arrayToShift) {
  let arrayLen = arrayToShift.length-1;
  let midwayIndex = Math.floor(arrayLen /2);
  for (let i = arrayLen; i >= midwayIndex; i--) {
    let temp = arrayToShift[i];
    arrayToShift[i] = arrayToShift[arrayLen-i];
    arrayToShift[arrayLen-i] = temp;
  }
  return arrayToShift
}

console.log('Changed array: ' + reversedArrayModified([2,1,6,4,-7]))


// 3. FizzBuzz
function fizzBuzz() {
  const result = [];
  for (let i = 1; i <= 135; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

// Log first 10 items:
const fizzBuzzResult = fizzBuzz();
console.log(fizzBuzzResult.slice(0,10));

// 4. Fibonacci
function sumFibonacciBelowLimit(limit) {
  let a = 0, b = 1, sum = 0;
  while (a < limit) {
    sum += a;
    // Update numbers using array destructuring
    [a, b] = [b, a + b];
  }
  return sum;
}

console.log(sumFibonacciBelowLimit(1000000));

// 5. Remove the Negative
function removeNegativeNumbers(arr) {
  return arr.filter(x => x >= 0);
}

// Given array
const X = [1, -2, 4, 1];


console.log(removeNegativeNumbers(X));

// 6. Censorship
function censorWordInArray(arr, wordToCensor) {
  return arr.map(item => {
    // if item is the word to censor
    if (item === wordToCensor) {
      // Replace the word with asterisks
      return '*'.repeat(wordToCensor.length);
    } else {
      // Return the item unchanged if it's not the word to censor
      return item;
    }
  });
}

const xString = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];
console.log(censorWordInArray(xString, 'Program'));


// Intermediate Algorithms
// Find the longest word length
function findLongestWord(sentence) {
const words = sentence.split(" ");
  // Use reduce to find the length of the longest word
  //Accumulator starts with 0, action - find the max of previous and current word.length, new accumulator - new longest word length
  const longestLength = words.reduce((max, word) => Math.max(max, word.length), 0);
  return longestLength;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 6
console.log(findLongestWord("May the force be with you")); // 5


// Professional Algorithms
// Magic squares
function isMagicSquare(grid) {
  const magicConstant = 15;
  let rowSum = [0, 0, 0]; // array to hold sum of each row of the grid: rowSum[0] - first row
  let colSum = [0, 0, 0]; // array to hold sum of each colu// of the grid: rowSum[0] - first row
  let diagSum = [0, 0];

  for (let i = 0; i < 9; i++) {
    let row = Math.floor(i / 3);let col = i % 3;

    // Sum for rows and columns
    rowSum[row] += grid[i];
    colSum[col] += grid[i];

    // Sum for diagonals
    if (row === col) {
      diagSum[0] += grid[i];
    }
    if (row + col === 2) {
      diagSum[1] += grid[i];
    }
  }

  // Check if all sums are equal to the magic constant
  if (!rowSum.every(sum => sum === magicConstant) || !colSum.every(sum => sum === magicConstant)) {
    return false;
  }

  if (diagSum[0] !== magicConstant || diagSum[1] !== magicConstant) {
    return false;
  }

  return true;
}

console.log(isMagicSquare([8, 1, 6, 3, 5, 7, 4, 9, 2])); // true
console.log(isMagicSquare([3, 5, 7, 8, 1, 6, 4, 9, 2])); // false


// Sorting Algorithms

function selectionSort(arr){
  var minIdx, temp,
    len = arr.length;
  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
      if(arr[j]<arr[minIdx]){
        minIdx = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}
console.log(selectionSort([3, 5, 7, 8, 1, 6, 4, 9, 2]));


// Recursion Algorithms
function bunnyEars(bunnies) {
  // Base case: if bunnies==0, just return 0.
  if (bunnies == 0) {return 0;}
  // Recursive case: otherwise, make a recursive call with bunnies-1
  // (towards the base case), and fix up what it returns.
  return 2 + bunnyEars(bunnies-1);
}
