// constructor notation for creating

var person = new Object();
person.firstName = "Vaibhav";
person.lastName = "Sutar";
person["Age"] = 28;
person["Job"] = "unemployed";

console.log(person)
console.log(person.firstName)
console.log(person["lastName"])


person.son = new Object();
console.log(person);

person.son.firstName = "Gippo";

person.son["lastName"] = "Sutar";

console.log(person.son);


// literal notation recommended method
var char ={
    Name:"Xiao",
    age:4000,
    };
console.log(char)


var person2 = {
    name:"vaibhav",
    lastname :"sutar",
    age:29,
    daughter:{
        name:"cocolia",
        lastname:"zaychik",
        age:5
    },

    myfunc:function(firstn,fathern,age){
        console.log(firstn+" is the daughter of "+fathern+" and she is "+age+" years old")
    }
}

console.log(person2);
person2.myfunc(person2.daughter.name,person2.name,person2.daughter.age);