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
let house = [];
house.push(person1);
house.push(person2);
house.push(person3);
house.push(createPerson("Bob", 0, false));

let person5 = createPerson("Alice", 11, true);
house[4] = person5;
house[5] = createPerson("Craig", 4, true);

house[0].haveABirthday();
house[1].haveABirthday();
house[2].haveABirthday();
house[3].haveABirthday();
// house[4].haveABirthday();
person5.haveABirthday(); // can still access by old variable
house[5].haveABirthday();

console.log(house);

// let animals = [];
// animals.push("cat")
// animals.push("dog")
// animals.push("fish")
// console.log(animals)
