//Basic Algorithms
// Palindrome checker
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Check if the cleaned string is the same as its reverse
  let reverseStr = cleanedStr.split('').reverse().join('');

  return cleanedStr === reverseStr;
}

console.log(isPalindrome("race car")); // should return true
console.log(isPalindrome("not a palindrome")); // should return false


// Intermediate
// Return all numbers in a range
function sumAll(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumAll([1, 4])); // 10


// Sum of primes

function isPrime(number) {
  if (number <= 1)
    return false; // Numbers less than or equal to 1 are not prime
  // iterate over i and divide number by i
  // to check if number is divisible by any other number different than itself and 1
  // check up to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0)
      return false;
  }
  return true;
}


function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumPrimes(10));

// Fibonacci
// iteration
function iFibonacci(n) {
  if (n <= 2)
    return 1; // The first two Fibonacci numbers are 1

  let prev = 1, curr = 1;
  for (let i = 3; i <= n; i++) {
    let next = prev + curr; // Calculate the next Fibonacci number
    prev = curr; // Update prev to current
    curr = next; // Update curr to next
  }
  return curr; // The nth Fibonacci number
}

console.log(iFibonacci(7)); // 13

// recursion
function rFibonacci(n) {
  if (n <= 2){
    return 1;
  }else{
    return rFibonacci(n-2) + rFibonacci(n-1);
  }
}

console.log(rFibonacci(7));
