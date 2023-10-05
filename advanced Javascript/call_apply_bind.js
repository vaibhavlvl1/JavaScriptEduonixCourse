// can be eplained by examples

var person = {
    firstName: "John",
    lastName: "Smith",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

var definePerson = function (age, job) {
    console.log(this.fullName() + " is " + age + " years old and he is a " + job);
}

// definePerson(28, "Planner"); This obviously gives an error

definePerson.call(person, 28, "Front End Developer");
definePerson.apply(person, [28, "Psychiatrist"]);

var getPerson = definePerson.bind(person);

getPerson(29, "Mind Fucker")