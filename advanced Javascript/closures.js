/* Closure is feature of javascript language.
the inner returned function still has access to the variables of outer function even if the 
outer function has ended.(even if its execution context is over) */

// example

function calc(num1) {
    var num2 = 10;

    return function (num3) {
        var sum = num1 + num2 + num3;
        console.log(sum);
    }
}

//  in the above example the inncer function has access to the num2 var after calc ends. This is closure.

var add = calc(5)
console.log(add)
add(5)

// or

calc(5)(5)