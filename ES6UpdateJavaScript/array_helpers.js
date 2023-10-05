var names = ["Alex", "Mary", "Nick", "Jane"];

for (var i = 0; i < names.length; i++) {
    console.log("The name is " + names[i]);
};

/************************** forEach() *************************************/

names.forEach((name) => {
    console.log("The name is " + name)
});

names.forEach(function (name) {
    console.log("for each loop name is" + name);
})



/************************* map() **********************************************/

var numbers = [1, 2, 3, 4, 5];

var newArr = [];

for (var i = 0; i < numbers.length; i++) {
    newArr.push(numbers[i] * 10);
}

console.log(numbers);
console.log(newArr);

// using map helper

var mapArray = numbers.map(function (number) {
    return number * 5;
});

console.log(mapArray)


var persons = [
    { firstname: "John", lastname: "smith" },
    { firstname: "Bob", lastname: "Brown" },
    { firstname: "Nick", lastname: "Doe" }
];

// group first names in new array

var getFirstNames = persons.map(function (person) {
    return person.firstname;
})

console.log(getFirstNames)




/************************ filter()/ find() ********************/

var persons = [
    { name: "Mary", gender: "female" },
    { name: "John", gender: "male" },
    { name: "Jane", gender: "female" },
    { name: "Bob", gender: "male" },
]

// seperating males normal way

var males = [];

for (var i = 0; i < persons.length; i++) {
    if (persons[i].gender === "male") {
        males.push(persons[i].name);
    }
}

console.log(males);


// using filter ()

var females = persons.filter(function (person) {
    return person.gender === "female";
})
console.log(females)

// find() finds first similar item and stops 

var males = persons.find(function (person) {
    return person.gender === "male";
})
console.log(males)



/****************************** every()/ some() ******************/


var persons = [
    { name: "John", age: 28 },
    { name: "Mary", age: 10 },
    { name: "Nick", age: 8 },
    { name: "Jane", age: 0 },
]

var everyPersonCanVote = true;
var onlySomePersonsCanVote = false;

for (var i = 0; i < persons.length; i++) {
    if (persons[i].age < 18) {
        everyPersonCanVote = false;
        onlySomePersonsCanVote = true;
    }
}

console.log("every person can vote", everyPersonCanVote)
console.log("only some persons can vote", onlySomePersonsCanVote)


// using every() helper checks if every of them fulfill the condition. uses and operator

var allCanVote = persons.every(function (person) {
    return person.age >= 18;
})

console.log(allCanVote);

// some() helper checks if some of them fulfill the condition . uses or operator

var someCanVote = persons.some(function (person) {
    return person.age <= 18;
})

console.log(someCanVote)



/************************ reduce() *******************************/

var numbers = [100, 200, 300];

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum)

// using reduce helper

var total = numbers.reduce(function (prev, num) {
    return prev + num;
}, 0);
console.log(total)


// using or string arrays

var firstName = ["Jack", "Jon", "Jill", "Jennifer"];
var lastName = ["Black", "Snow", "Valentine", "Biel"];

var fullName = firstName.reduce(function (previous, firstName, index) {
    previous.push(firstName + " " + lastName[index]);
    return previous
}, [])

console.log(fullName);