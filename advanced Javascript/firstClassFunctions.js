// can store function in variables

var a = function () {
    console.log("hello")
}

a();

// function as a parameter

function sum(num1, num2, fn) {
    console.log(num1 + num2);
    console.log(fn());
}

sum(1, 3, function () {
    return "Function Executed"
});


// example

var scores = [55, 35, 87, 45];

function checkResult(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }
    return newArr
}

function passFail(score) {
    return score >= 51;
}

console.log(checkResult(scores, passFail));


// Important How to retur Function from other functions

function finalResult(score) {
    if (score >= 81) {
        return function (name) {
            console.log(name + ", You passed an exam and you are student of state unviversity")
        }
    } else if (score >= 51) {
        return function (name) {
            console.log(name + ", you passed an exam and your are student state college")
        }
    } else {
        return function (name) {
            console.log(name + ", you failed")
        }
    }


}


var result1 = finalResult(77);
console.log(result1);

result1("john");

var result2 = finalResult(44);
result2("Jock")

finalResult(94)("Mary");

