"use strict";

console.log("Starting the app.\n");

function write_after_2seconds(msg, callBack) {
    setTimeout(function(){
        console.log(msg);
        callBack(msg);
    }, 2000);
}

//if we add the loop here it would not run
//We want as much threads as we asked for
function proc(n, func, cb) {
    var order = nprocs - n + 1;
    if (n > 0) {
        func("Process: " + order, function(){
            proc(--n, func, cb);
        });
    } else {
        cb("Ending at all.");
    }
}

/*
//Number of procs we want
var nprocs = 5;

proc(nprocs, write_after_2seconds, function(msg) {console.log(msg)});

//*/


// Processing an array in serial

function proc_arr(elements, fn, callBack) {

    if (elements.length > 0) {

        fn(elements.shift(), function() {

            proc_arr(elements, fn, callBack);
        });
    } else {

        callBack("Processing of data status: finished.");
    }
}


proc_arr(["Processed element 1", "Processed element 2", "Processed element 3"], write_after_2seconds, function(msg) {
    console.log(msg);
});