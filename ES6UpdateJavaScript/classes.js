// ES5 

function PersonES5(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const nickES5 = new PersonES5("Nick", "Smith", 28);
console.log(nickES5)

//  since this object is created using constructor It has access to global object function prototype

PersonES5.prototype.aboutPerson = function () {
    console.log(`My name is ${this.firstName} ${this.lastName}`)
}
nickES5.aboutPerson()

console.log("_____________-----------------------------")


// ES6


class PersonES6 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    aboutPerson() {
        console.log(`My name is ${this.firstName} ${this.lastName}`)
    }
}


const nickES6 = new PersonES6("Nix", "Brown", 29);

console.log(nickES6);
nickES6.aboutPerson();


// Inheritance

class DeveloperES6 extends PersonES6 {
    constructor(firstName, lastName, age, experience, projects) {
        super(firstName, lastName, age);
        this.experience = experience;
        this.projects = projects;
    }
}

const devNick = new DeveloperES6("Nick", "Briows", "28", "5", "This.com")

console.log(devNick)