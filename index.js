// This demo will make a person object with a haveABirthdayParty method.
// In your assignment, you will make a pet object with a feed method.

// I want an object of a person.
// If you have a method on an object,
// you can access properties of the object using the `this` keyword.
const person = {
    name: "Bobby",
    age: 44,
    hair: true,
    eyes: "brown",
    height: 72, // in inches
    // We declare methods this way...
    haveABirthdayParty: function() {
        console.log(`happy birthday, ${this.name}!`);
        // this.age = this.age + 10; // this will age you 10 years
        // this.age += 10; // this will also age you 10 years
        this.age++; // This will age you one year
    }, 
    status: function() {
        console.log(`Person Status... Name: ${this.name}, Age: ${this.age}, Height: ${this.height}`);
    }
}

console.log(`${person.name} is ${person.age}`);
person.status();
person.haveABirthdayParty();
person.status();
person.haveABirthdayParty();
person.status();
person.haveABirthdayParty();
person.status();
person.haveABirthdayParty();
person.status();

// Review
// We declare functions this way:
function add(x, y) {
    return x+y;
}
