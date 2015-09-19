"use strict";

var Car = function(name) {
    this.name = name;
    this.saluda = function() {
        console.log("Soy el coche %s", this.name);
    }
};

//Create the object
var seat = new Car("Mercedes-Benz");

//Call the method
seat.saluda();

//Call using the first argument as the this with call or apply
seat.saluda.call(seat /* , arg1, arg2...*/);
seat.saluda.apply(seat /*, [arg1, arg2...]*/); //This pases the arguments as one arry in difference with call

//Other calls the method
setTimeout(seat.saluda, 50);

//Other calls the method with binding
//That makes the function uses the var parameter as its "this"
setTimeout(seat.saluda.bind(seat), 50);
