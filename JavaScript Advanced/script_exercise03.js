// 1
const checkAge = (age) => age >18? true : `Do you have your parents permission to access this page?`;

// 2
function pow(x, n) {
  if (n < 0) {
    return `Error: argument r is less than 0`
  }
  // Base case: any number to the power of 0 is 1
  if (n === 0) {
    return 1;
  }
  // Recursion:
  else {
    return x * pow(x, n - 1);
  }
}


console.log(pow(3, 2)); // 9
console.log(pow(3, 3)); // 27
console.log(pow(1, 100)); // 1
console.log(pow(100, -2))

// 3
// const ask = (question, yes, no) => confirm(question)?  yes() : no();
//
// ask(
//   "Do you agree?",
//   function() { console.log("You agreed.") },
//   function() { console.log("You canceled the execution.") }
// )

// 4
// Define the calculator object with methods to read values, calculate sum, and multiplication
const calculator = {
  read() {
    this.value1 = +prompt('Enter first number:', 0);
    this.value2 = +prompt('Enter second number:', 0);
  },
  sum() {
    return this.value1 + this.value2;
  },
  mul() {
    return this.value1 * this.value2;
  }
};

// Function to initiate the calculator
function initiateCalculator() {
  calculator.read();
  alert('Sum: ' + calculator.sum());
  alert('Product: ' + calculator.mul());
}


// 5
const min = (a,b) => a < b? a : b < a? b : `${a},${b}`;

console.log(min(1,1));
