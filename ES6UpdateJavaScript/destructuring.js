const arr = [10, 20, 30, 40, 50];

const [ten, twenty, thirty] = arr;
console.log(ten, twenty);

const person = {
    firstName: "Jihn",
    lastName: "Smith",
    age: 30
}

const { firstName, lastName } = person;

console.log(firstName, lastName);

const aboutMe = john => {
    const { firstName, lastName, age } = john
    console.log(`I am ${firstName} ${lastName} I am ${age} years old`)
}

aboutMe(person);