var numbers = [1, 2, 3, 4, 5];
var numbers2 = [11, 22, 33, 44, 55];

// concatenate using spread operator

var numbers3 = [...numbers, ...numbers2];
console.log(numbers3);

// insert 0 at start and 66 at end

var numbers4 = [0, ...numbers, ...numbers2, 66];
console.log(numbers4);

// copying array with a new memoryspace

var names = ["vaibhav", "weib", "vaio", "ehe"];


// using es5
var namesCopy = [].concat(names);
namesCopy.push("jkrowling")
console.log(namesCopy)
console.log(names);

// in es6

let namesCopy2 = [...names];
namesCopy2.push("venti")
console.log(namesCopy2)