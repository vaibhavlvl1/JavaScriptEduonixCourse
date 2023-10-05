// everything is object in javcascript except primitives
// primitives which are null,undefined,strings,numbers,boolean
// 

// arrays are objects because we can add property to arrays

var arr = [1, 2, 3, 4];
console.log(arr);

arr.prop = "Hello"

console.log(arr.prop)

// this doesnt affect length of array


// similarly  functions are objects as well we can add property to functions

function a() {
    console.log('hello')
}

a['prop'] = "hi";

a.obj = {
    greet: 'hey'
}

a.myFunc = function () {
    console.log('hello');
}

console.log(a.obj);
console.log(a.myFunc)