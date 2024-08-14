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

person1.haveABirthday();
person2.haveABirthday();
person3.haveABirthday();
person1.status();
person2.status();
person3.hair = true;
person3.status();
