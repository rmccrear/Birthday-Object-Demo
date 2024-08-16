// Create person object

// factory function
function createPerson(nameInput, ageInput, hairInput) {
  // Create an object based on the function arguments
  let person = {
    name: nameInput,
    age: ageInput,
    hair: hairInput,
    haveABirthday: function() {
      console.log(`Happy Birthday ${this.name}`)
      this.age += 1;
    },
    status: function() {
      console.log(`Name: ${this.name} Age: ${this.age} Hair: ${this.hair}`)
    }
  }
  // Optional initialization
  console.log("Created a person...")
  person.status();
  return person;
}

let person1 = createPerson("Robert", 46, true);
let person2 = createPerson("Kabrini", 36, true);
let person3 = createPerson("Chris", 26, false);
// let person4 = ...

let firstGrade = [];

firstGrade.push(createPerson("Billy", 7, true));
firstGrade.push(createPerson("Willy", 7, true));
firstGrade.push(createPerson("Sam", 7, true));
firstGrade.push(createPerson("Pam", 7, true));
firstGrade.push(createPerson("Mary", 7, true));
// console.table(firstGrade);

let secondGrade = [];
secondGrade.push(createPerson("Alice", 8, true))
secondGrade.push(createPerson("Billy", 8, true))
secondGrade.push(createPerson("Cathy", 8, true))
secondGrade.push(createPerson("Dan", 8, true))
secondGrade.push(createPerson("Ed", 8, true))
// console.table(secondGrade);
let thirdGrade = [];

// give everyone a birthday
firstGrade[0].haveABirthday();
firstGrade[1].haveABirthday();
firstGrade[2].haveABirthday();
firstGrade[3].haveABirthday();
firstGrade[4].haveABirthday();
console.table(firstGrade);

// use a loop to give everyone a birthday
// by calling the haveABirthday method on the object
for(let i=0; i<secondGrade.length; i++) {
  secondGrade[i].haveABirthday();
}
console.table(secondGrade);

secondGrade.forEach(person => person.status());
