// creating object using normal way

var person = {}; // empty object creation
person.firstName = "John";
person.lastName = "Smith";
console.log(person);

// creating function for creating object

function createPerson() {
    var newPerson = {};
    newPerson.firstName = "Bob";
    newPerson.lastName = "Brown";

    return newPerson
}

console.log(createPerson())


// much simpler method to create large number of objects

function createBaby(fName, lName) {
    var newPerson = {};
    newPerson.firstName = fName;
    newPerson.lastName = lName;

    return newPerson
}


// using function constructors, recommended method to create large number of objects
// use Pascal Notation to create function

function CreateChar(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}

// using new is important else the value will be undefined

var Baby = new CreateChar("Kiana", "Kaslana");

console.log(Baby)


/* Built in Function constructors are 
1. new Object()
2.new Date()
3.new Array()
4.new String()
5. new Number()

4 and 5 return objects though they are string and numbers which are primitives */

var NormString = "Hello";
var ObjString = new String("Bronya");

console.log(typeof (NormString))
console.log(typeof (ObjString))