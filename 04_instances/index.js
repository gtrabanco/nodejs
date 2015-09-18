"use strict";

var Car = function(brand) {
    this.name = brand;
};

var seat = new Car("Mercedes Benz");

console.log(seat.name);