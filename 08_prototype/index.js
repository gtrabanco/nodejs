"use strict";

//Make a object constructor
var Person = function(name) {
    this.name = name;
};

//Create the object
var newPerson = new Person("Thomas");

//Assign a method to the object (no constructor)
newPerson.sayHello = function() {
    console.log("Hello I am %s.", this.name);
};

newPerson.sayHello();
//newPerson.eat(); //This will throw a fatal error because it does not
                // have eat at this point, it is not declared yet

//Create other object and see it has not the previous method
var otherPerson = new Person("Jerry");

//otherPerson.sayHello(); //This should throw a fatal error

//Put a method to the prototype
Person.prototype.eat = function () {
    console.log("Hello, I am %s and I am eating.", this.name);
};

// newPerson and otherPerson will have "eat" just after this point


//See that all objects has the method
newPerson.eat();
otherPerson.eat();
