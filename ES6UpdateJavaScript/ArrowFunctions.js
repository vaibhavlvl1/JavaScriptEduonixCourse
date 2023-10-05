const multiply = function (x, y) {
    return x * y;
}

console.log(multiply(3, 4));


mul = (x, y) => x * y;

console.log(mul(5, 5));


// using arrow functions in Map() helper

arr = [4, 8, 12, 16]

var double = arr.map((num) => num * 2);

console.log(double)



var personES5 = {
    firstName: "Nick",
    lastName: "Doe",
    fullName: function () {
        // var that = this;  gives undefined without this line
        return function () {
            console.log(this.firstName + " " + this.lastName);
        }
    }
}
personES5.fullName()();


// using arrow function gives full name

var personES6 = {
    firstName: "Nick",
    lastName: "Doe",
    fullName: function () {
        return () => {
            console.log(this.firstName + " " + this.lastName);
        }
    }
}
personES6.fullName()();

// practical exaample

document.querySelector('h1').addEventListener('click', function () {
    console.log(this);
    // if we dont use arrow function the this below will refer to global object and cause ?an error. arrow function makes sure that "this " refers to scope outer to where its present.
    change_color = () => {
        this.style.color = "green";
    }
    change_color();
})