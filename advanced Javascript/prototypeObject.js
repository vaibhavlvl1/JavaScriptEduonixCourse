// inheritance
// all objects inherit properties from the prototype object

var obj = new Object();

// Object.prototype.greet = "hekllo";

// console.log(obj.greet)

// obj inherits greet property from Object


// obj made from constructor has access to prototype object created for it and also the
// global object prototype 
// its properties has two _proto_ properties (one of itself and other global)
// check in console function.prototype


// obj made from literal notation has access only to global prototype object

function createBaby(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
}

var kk = new createBaby("Kiana", "Kaslana");
console.log(kk)

var hero = {
    firstname: "Arnest",
    lastname: "HardWorker"
}
console.log(hero)


/*
function createChar(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
    this.getName = function () {
        return this.firstname + " " + this.lastname
    }
}

*/

//  all objects created with above constructor will have a getName method in it. it will
// take a spot in memory in all the objects
// better way is to put this method in constructors prototype
// ex

function createChar(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;

}
createChar.prototype.getFullName = function () {
    return this.lastname + " " + this.firstname;
}

var HoT = new createChar("Mei", "Raiden");
console.log(HoT);
console.log(HoT.getFullName());