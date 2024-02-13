// 1
class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}


// 2
const person1 = new Person("John", 25 );


function describePerson(callback) {
  callback.call(person1);
};

describePerson(function() {
  console.log(this.introduce()); //using "this" in a callback to refer to person1
});

//3
function wait(ms) {
  return new Promise( resolve => {
    setTimeout( () => {
        resolve(`Waited for ${ms} milliseconds`);
      },
    ms);
    }
  );
}


wait(1000).then(message => console.log(message));
