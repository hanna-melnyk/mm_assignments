// Exercise 1
function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);


console.log(filtered);

//Exercise 2

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 28 }

let users = [ john, pete, mary ];

let names = users.map(person => person.name)

console.log(names);

// Exercise 3
let john2 = { name: "John", age: 25 }
let pete2 = { name: "Pete", age: 30 }
let mary2 = { name: "Mary", age: 29 }

let arr2 = [ john2, pete2, mary2 ]

function getAverageAge(arr) {
  return arr.reduce((accumulator, currentV) => accumulator + currentV.age, 0)/arr.length;
}

console.log( getAverageAge(arr2) )
