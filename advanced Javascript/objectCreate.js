console.dir(Object);

var obj1 = Object.create(Object.prototype, {});
// console.log(obj1)

// assigning values to objects

// method 1

obj1.name = "John";

console.log(obj1);

// method 2 while creating object

var obj2 = Object.create(Object.prototype, {
    name: {
        value: "Johns"
    },
    lastname: {
        value: "Bravo"
    }
})

console.log(obj2)


function Person() {
    this.name = "John";
}

Person.prototype.greet = "Hello";

var person1 = new Person();


var person2 = Object.create(Person.prototype, {})

console.log(person1);
console.log(person2);