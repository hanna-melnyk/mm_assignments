// Exercise 1.1 start

var myAge= 27;

if (myAge >= 18) {
  console.log("You are old enough to vote");
}

// end

// Exercise 1.2 start

document.getElementById("myButton").addEventListener("click", function() {
  let name = window.prompt("Please enter your name:");
  if (name == "John") {
    window.alert("Hello, John!");
  } else {
    window.alert("You are not John.");
  }
});



// Exercise 2.1 start
function numbersSum(numOne, numTwo) {
  return numOne + numTwo;
}

console.log("function test: \n"+ "1+2: " + numbersSum(1,2) +
"\n2+5: " + numbersSum(2,5)
);

// Exercise 2.2 start
function reversedS(string) {
  var result = ''
  for (i = string.length-1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}

console.log(reversedS('string'));


// Exercise 3.1 start
const fruits = ['peach', 'orange', 'lemon', 'mango']
for (const fruit of fruits) {
  console.log(fruit);
}

// Exercise 3.2
function arrayAverage(array) {
  var counter = 0;
  var sum = 0;
  for (var i = 0; i <= array.length -1; i++) {
    sum += array[i];
    counter ++;
  }
  return  "array average is equal to " + (sum / counter);
}

console.log(arrayAverage([2,4,6]));

// Exercise 3.3
function arrayMax(array) {
  var max = array[0];
  for (var i = 0; i <= array.length -1; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return  "array max is equal to " + max;
}
console.log(arrayMax([6,9,2]));

// Exercise 3.4
const arrayWords = ['This', 'used', 'to', 'be', 'an array', 'but', 'now', "it's", 'a', 'string']
var stringOfWords = ''
for (const item of arrayWords) {
  stringOfWords += item + ' ';
}
console.log(stringOfWords);
// Exercise 3.5

function nameExists(array, name) {
  for (var i = 0; i <= array.length - 1; i ++) {
    if (array[i] == name) {
      return true;
    }
  }
  return false;
}


console.log(nameExists(['John', 'Kate', 'Alice', 'Steve'], 'Katie'))

// Exercise 3.6
let arrayEven = []
var i = 1
while (i < 21) {
  if (i % 2 == 0) {
    arrayEven.push(i);
  }
  i++
}
console.log(arrayEven);

// Exercise 4.1
const book = {
  title: "The joy of X, a guided tour of mathematics",
  author: "Steven Strogatz",
  year: 2020,
  get description () {
    return `"${this.title}" by ${this.author}, ${this.year}`
  }
}

console.log(book.description);


// Exercise 4.2
const person = {
  name: "Susan",
  age: 32,
  gender: "female",
}

function personToString(person) {
  console.log(`Name: ${person.name}, Age: ${person.age}, Gender: ${person.gender}`)
}
personToString(person);

// Exercise 5.1, 5.2
const car = {
  make: "",
  model: "",
  year: "",
  start: function () {
    console.log(`the car has started`)
  },
  drive: function () {
    console.log(`you are driving the car`)
  }
}

car.start();
car.drive();

// Exercise 6.1
document.getElementById("alertButton").addEventListener("click", function() {
  window.alert("hi")
});

// Exercise 6.2
document.getElementById("greetButton").addEventListener("click", function () {
  let inputName = window.prompt("Please enter your name:")
  window.alert(`Hi ${inputName}`)
  }
);

// Exercise 7.1
document.getElementById("change-text-Button").addEventListener("click", function () {
  document.getElementById("text-to-change").innerText = "Text changed!";
  }
  );

// Exercise 7.2
var newLi = document.createElement("li")
newLi.textContent = "new";

document.getElementById("add-item-button").addEventListener("click", function () {
  document.getElementById("list-to-modify").appendChild(newLi);
  }
);

// Exercise 7.3
var newImgSrc = "https://www.natureplprints.com/p/729/domestic-cat-kittens-age-3-weeks-15336731.jpg.webp";
document.getElementById("change-image-Button").addEventListener("click", function () {
  document.getElementById("image-to-change").src = newImgSrc;
  }
);

// Exercise 7.4
// Array of user objects with username and password
var validUsers = [
  { username: "user1", password: "pass1" },
  { username: "user2", password: "pass2" },
  { username: "user3", password: "pass3" }
];

// items that store form and message path:
const form = document.getElementById('login-form');
const messageDiv = document.getElementById('login-message');



form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  //Create const that hold username and password
  const username = form.querySelector('#username').value;
  const  password = form.querySelector('#password').value;

  // Validation
  const userIsValid = validUsers.some(newInput => newInput.username === username && newInput.password === password);


  // if-statement to validate & display message
  if (userIsValid) {
    messageDiv.textContent = 'Login successful.';
    messageDiv.style.color = 'green';
    // Here, you can also toggle a flag or handle form data as needed

    // Reset the form
    form.reset();
  } else {
    messageDiv.textContent = 'Invalid username or password.';
    messageDiv.style.color = 'red';
    // Reset the form
    form.reset();
  }
  }
);


