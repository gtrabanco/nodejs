"use strict";


//Hoisting and scope examples

var x = "global value";

function firstTest() {
    console.log("The value of \"x\" on the firstTest is " + x);
}

function secondTest() {
    console.log("The value of the \"x\" at the top of the secondTest function is: " + x);


    x = "secondTest Value";

    console.log("The value of the \"x\" at the end of the secondTest function is: " + x);
}


function thirdTest() {
    console.log("The value of the \"x\" at the top of the thirdTest function is: " + x);


    var x = "ThirdTest value";

    console.log("The value of the \"x\" after the variable declaration in thirdTest function is: " + x);

    if (x.length > 0) {
        x = "ThirdTest IF new value";
    }

    console.log("The value of the \"x\" at the end of the thirdTest function is: " + x);

}

function fourthTest() {
    console.log("The value of the \"x\" at the top of the fourthTest function is: " + x);

    if (typeof x !== "undefined" && x.length < 0) {
        var x = "fourthTest value";
    }

    x = "Test of x declaration after IF";

    console.log("The value of the \"x\" at the end of the fourthTest function is: " + x);
}

console.log("Starting the app.");
console.log("Before calling the function \"%s\", the value of x is \"%s\"", "firstTest", x);
firstTest();
console.log("After calling the function \"%s\", the value of x is \"%s\"", "firstTest", x);
console.log("");

console.log("Before calling the function \"%s\", the value of x is \"%s\"", "secondTest", x);
secondTest();
console.log("After calling the function \"%s\", the value of x is \"%s\"", "secondTest", x);
console.log("");

console.log("Before calling the function \"%s\", the value of x is \"%s\"", "thirdTest", x);
thirdTest();
console.log("After calling the function \"%s\", the value of x is \"%s\"", "thirdTest", x);
console.log("");

console.log("Before calling the function \"%s\", the value of x is \"%s\"", "fourthTest", x);
fourthTest();
console.log("After calling the function \"%s\", the value of x is \"%s\"", "fourthTest", x);
console.log("");

console.log("End of the program.");