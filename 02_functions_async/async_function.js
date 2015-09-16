"use strict";

console.log("Starting the app.\n");

console.log("The beginning of the application.\n");

function write_after_2seconds(msg, callBack) {
    setTimeout(function(){
        console.log(msg);
        callBack(msg);
    }, 2000);
}


write_after_2seconds("Two senconds delay.\n", function(msg){
    console.log("I have written " + msg + "\n");

    console.log("\nFinishing the app.\n");
});

console.log("Exiting the app.\n");