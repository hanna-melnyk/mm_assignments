// 3d highest number
function thirdHighest (input){
  var first =0;
  var second =0;
  var third=0;

  for(var i =0; i<input.length; i++){
    if (input[i] > first){
      third = second;
      second = first;
      first = input[i];
    }
    else if (input[i] > second) {
      third = second;
      second = input[i];
    }
    else if (input[i] > third) {
      third = input[i];
    }
  }
  return third;
}

// Fibonacci
// My laptop stopped responding when I tried to calculate large numbers using recursion function, so
// I decided to use Binet formula in function in order to lower the memory usage
function fibonacciBinet(n) {
  const phi = (1 + Math.sqrt(5)) / 2;
  return Math.round((Math.pow(phi, n) - Math.pow(-phi, -n)) / Math.sqrt(5));
}


console.log(fibonacciBinet(43));
console.log(fibonacciBinet(101));
console.log(fibonacciBinet(227));


// Sum of odd Fibonacci numbers
function sumFibs(num) {
  let sum = 0;
  let prev = 1;
  let curr = 1;

  while (curr <= num) {
    if (curr % 2 !== 0) { // Check if the current Fibonacci number is odd
      sum += curr;
    }
    let next = prev + curr; // Generate the next Fibonacci number
    prev = curr; // Update the previous number to current
    curr = next; // Update the current number to next
  }

  return sum;
}

console.log(sumFibs(4));

// Triangle blocks
var rTriangle = function(rows){
  if (rows === 0) {
    return 0;
  } else{
    return rows + rTriangle(rows-1)
  }
}

console.log(rTriangle(1)) // should give 1
