//Basic algorithms
// Factorialize
function factorialize(n) {
  if (n < 0) {
    return `Error: function argument is less than 0`
  }
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorialize(n-1);
  }
}

console.log(factorialize(5));

// Title case a sentence
function titleCase(string) {
  const splitString = string.split(" ");
  for (let i = 0; i < splitString.length; i++) {
    let word = splitString[i];
    let firstLetter = word[0].toUpperCase();
    let remainingLetters = word.substring(1).toLowerCase();
    splitString[i] = firstLetter + remainingLetters;
  }
  return splitString.join(" ");
}

console.log(titleCase("this is the check if everything is working"));


//Professional Algorithms
function myReplace(str, before, after) {
  let splitString = str.split(" ");
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] == before) {
      splitString[i] = after;
    }
  }
  return splitString.join(" ");
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));


// Power N

function power(base, exponent) {
  if (exponent < 0 ) {
    return `Error: the exponent argument is less than 0`
  }
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}


