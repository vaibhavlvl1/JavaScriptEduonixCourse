const a = function (x, y) {
    console.log(x + y);

}
a(10, 20, 30, 40);

// function will only give sum of first two parameters
// to use all parameters we use rest parameter

const b = function (x, y, ...rest) {
    // console.log(arguments);
    // console.log(rest)
    // console.log(x + y)
    var restSum = 0;
    for (let res of rest) {
        console.log(res)
        restSum += res
    }
    console.log(restSum + x + y)
}

b(1, 2, 3, 4, 5)


const family = (lastname, ...names) => {
    names.forEach(name => {
        console.log(`${name} ${lastname}`)
    });
}

family("Smith", "jay", "jes", "tez");

