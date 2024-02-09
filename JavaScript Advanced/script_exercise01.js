// Exercise 1
let user = {
  name: "John",
  years: 30
}


/*Deconstruction*/
let {name, years: age, isAdmin = false} = user
console.log(name, age, isAdmin);


// Exercise 2
var planet = 'Earth';
var currentVisitor = '';

// Exercise 3
/*The result will be an error, because the sayHi () function is not accessible in a global scope, only in block scope*/

// let phrase = "Hello"
// user = "Hello"
// if (true) {
//   let user = "John";
//   function sayHi() {
//     alert(`${phrase}, ${user}`)
//   }
// }
//
// sayHi()


// Exercise 4
const userN = {};


userN.name = "Pete";
console.log("Exercise 4. Add name: " + userN.name);

userN.surname = "Pete";
console.log("Exercise 4. Add surname: " + userN.surname);


delete userN.name;
console.log("Exercise 4. Delete name: " + userN.name);

// Exercise 5

/*It is possible. You can reassign the properties of an object, but not the object itself (the binding is constant)*/

const userM = {
  name: "John"
}

// does it work?
userM.name = "Pete"

console.log(userM);

// Exercise 6
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}

function sumAll(salaryList) {
  let sum = 0;
  for (let item in salaryList) {
    sum += salaryList[item];
  }
  return sum;
}

console.log(sumAll(salaries));


// Exercise 7
a = 1
b = 7


let rewrittenStatement = (a + b < 4)? 'Below' : 'Over';

console.log(rewrittenStatement);

// Exercise 8
var login = '';

let message = (login == 'Employee')? 'Hello': (login == 'Director') ?  'Greetings' :  (login == '') ?  'No login' : '';

console.log(message);

