"use strict";

//Make a object constructor
var Person = function(name) {
    this.name = name;
    this.sayHello = function () {
        console.log("Hello! I am %s.", this.name);
    };
    this.eat = function() {
        console.log("%s is eating.", this.name);
    };
};

//Create other object
var Police = function(name) {
    Person.call(this, name); //This create the object person in the context of this
    this.job = function() {
        console.log("My job is police and my name is %s. I am a survivor of the zombie apocalypse.", this.name);
    }
};

//Create other object
var FireFigther = function (name) {
    this.job = function() {
        console.log("My job is fire fighter and my name is %s", this.name);
    }
};

FireFigther.prototype = new Person(); //Appreciate that the context of this is not Person


//Create another more object
//This way is for node but jquery for example has a extend method as well, we can create our...
var _extend = require("util")._extend;

var Soldier = function(name) {
    this.job = function () {
        console.log("I am a soldier and my name is %s", this.name);
    }
};
console.log(_extend(Soldier, Person.prototype));


//See the results
var personOne = new Person("Tom");
personOne.sayHello();
//personOne.job();

var personTwo = new Police("Rick");
personTwo.job();

var personThree = new FireFigther("George");
personThree.job();

var personFour = new Soldier("Ryan");
console.log(personFour);
personFour.job();