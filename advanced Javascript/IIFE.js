// immediately invoked function expression

(function (name) {
    console.log("Hello " + name);
})("john");

//  above function is called in the same line This is known as iife 

// this is also correct

(function (name) {
    console.log("Hello " + name);
}("Mack"));

// other example

var a = function () {
    console.log("ahoy")
}();