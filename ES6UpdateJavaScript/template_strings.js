const name = "John";

let age = 28;
let profession = "Web Developer";

function personES5() {
    console.log("My Name is " + name + ". I am " + age + " years old. I work as a " + profession);
}

personES5();

//  using template strings

function personES6() {
    return `My Name is ${name}. I am ${age} years old. I work as a ${profession}`;
}

personES6();

function experience(company1, company2) {
    console.log(`${personES6()}. I have ${company1 + company2} years of programming experience`)
}

experience(4, 7);


// strings methods

let greet = "Hello my dear students";

// startsWith()
console.log(greet.startsWith("Hello"));

// endsWith()
console.log(greet.endsWith("w"));

// includes()

console.log(greet.includes("dear"));

