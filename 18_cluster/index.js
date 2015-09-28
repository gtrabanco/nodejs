"use strict";

var cluster = require('cluster');

if (cluster.isMaster) {
    //Fork workers, one per processor (cpu core)
    var nCores = require('os').cpus().length;
    //console.log('The cpus: ', require('os').cpus());

    var childs = [];
    for(let i = 0; i < nCores; i++) {
        let worker = cluster.fork();
        childs.push(worker);
    }

    cluster.on('exit', function (worker, code, signal) {
        console.log('Exiting worker #%d', worker.id);
        console.log('Don\'t worry we have already %d workers for us. Thug life!', childs.length);
    });

    console.log("Hello I am the master and I have %d childs", cluster.workers.length);
    console.log(childs);

} else {
    //Is a worker! All our code here
    //All workers can listen in the same port.

    console.log('I am worker #' + cluster.worker.id);
    setTimeout(function () {
        process.exit();
    }, cluster.worker.id * 5000);
}