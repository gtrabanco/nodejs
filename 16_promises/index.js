"use strict";


/*
var promise = new Promise(func...);
//Consecutive (Serial)
promise
    .then(promise1)
    .then(promise2)
    .catch(error)



//Call some promises in parallel
var promisses = ['one', 'two'];
var promisedTexts = promisses.map(echar); //Call echar function for each element in array

promise.all(promissedTexts)//Also: promise.all([func1, func2...])
    .then(function(texts) {
        console.log(texts); //All finished
    })
    .catch(function (errorReason) {
        //If one fails we will be here
    });

promise.race() //The same in top but when one is finished stop all and return the result of that one
    .then(func...)
    .then(func...)
    .catch(func error...);

*/

/*
//Here the example with returning value
function wait(timeInSecs) {
    //If we dont return anything Promise will fail saying does not have then
    return new Promise(function (resolve, rject) {
        setTimeout(function () {
            resolve('Done.');
        }, timeInSecs * 1000);
    })
}

wait(1).then(function (result) {
    console.log(result);
}).catch(function(error){
    console.log('Error');
});
*/


function wait2(timeInSecs) {
    //If we dont return anything Promise will fail saying does not have then
    return new Promise(function (resolve, rject) {
        console.log(timeInSecs);
        setTimeout(function () {
            console.log('Done in side.');
            resolve(timeInSecs);
        }, timeInSecs * 1000);
    })
}

/*
//This a bad way to serialize
wait2(1).then(function (result) {
    wait2(1).then(function(result){})
}).catch(function(error){
    console.log('Error');
});
*/

//Serial call
/*
wait2(1)
    .then(wait2) //Call with the result of the first
    .then(function (result) {
        console.log("Task finished with \"%s\"", result)
    })
    .catch(function (error) {
        console.log('Error: %s', error);
    });
*/

function wait3(opcs) {
    //If we dont return anything Promise will fail saying does not have then
    return new Promise(function (resolve, rject) {
        setTimeout(function () {
            console.log('1call');
            opcs.text += '-1call';
            resolve(opcs);
        }, opcs.secs * 1000);
    })
}

wait3({secs: 2, text:'beginingtext'})
    .then(wait3)
    .then(function (options) {
        options.secs=5;
        options.text='modified';
        return wait3(options);
    })
    .then(function (resolved) {
        console.log('The task is completed with the text: ', resolved.text);
    })
    .catch(function (error) {
        console.log('Error');
    });

console.log('The code continues here');