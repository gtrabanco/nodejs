"use strict";

var util = require("util");

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

var PersonJob = {
    job: function() {
        console.log("I have no job");
    }
};
Person.prototype = util._extend(Person.prototype, PersonJob);

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


//See the results
var tom = new Person("Tom");
tom.sayHello();
tom.job();

var rick = new Police("Rick");
rick.job();

var george = new FireFigther("George");
george.job();


//Create another more object
//This way is for node but jquery for example has a extend method as well, we can create our...

var Soldier = {
    job: function () {
        console.log("I am a soldier and my name is %s", this.name);
    }
};
Person.prototype = util._extend(Person.prototype, Soldier);


var ryan = new Person("Ryan");
ryan.job();


//Another more example to make it clear
var mixing = {
    job: function() {
        console.log("Because the crisis now I am student and my name is %s", this.name);
    }
};

Person.prototype = util._extend(Person.prototype, mixing);

var student = new Person("Mike Wazowsky");
student.job();

//And here ryan is also a student see it
console.log("Ryan has changed his job to student as well... Let's see it!");
ryan.job();
