"use strict";


var events = require("events");

var myEventEmitter = new events.EventEmitter();

myEventEmitter.on('calling', function(who){
    if (who === 'mom') {
        return;
    }

    console.log("Ring, Ring");
});

myEventEmitter.on('calling', function(who){

    console.log("Brr, Brr");
});


myEventEmitter.emit('calling');