var names = [
    "John",
    "Bob",
    "Mary",
    10,
    true,
    [1,2,3],
    function(name){
        return "Hello "+name;
    }
    ];

console.log(names);

// accessing elements
console.log(names[0])
console.log(names[3])
console.log(names[5])
console.log(names[5][0])
console.log(names[6](names[0]))


// another methof of creating array

var arr = new Array(1,'John',false) // not recommeded




// array methods 

var  colors = ["white","black","red"];
console.log(colors);


colors[0] = "green";
console.log(colors);

colors.push("pink")
console.log(colors)


colors.pop();
console.log(colors);


// tor remove at begining

colors.shift();
console.log(colors)

// to add at the beginning 
colors.unshift("green")
console.log(colors)


// to get index of elements

console.log(colors.indexOf("green"));

// example to check if ele exists in an array or not

if (colors.indexOf("blue") == -1){
    colors.push("blue");
};  
console.log(colors);