"use strict";

var mongoose = require('mongoose');
//We need to connect to database
require('../lib/mongoose');

//Define the Scheme
var agentScheme = mongoose.Schema({
    name: String,
    age: Number
});

agentScheme.methods.fullInfo = function() {
    return this.name + ' is ' + this.age;
};

agentScheme.statics.list = function (conds, callBack) {
    //Without callback return a query type object
    var query = this.find(conds); //Agent in spite of this is fine as well
    query.sort('name');

    //Exec the query
    query.exec(function (error, rows){
        if (error) {
            return callBack(error);
        }

        return callBack(null, rows);
    })
};

agentScheme.statics.random = function(callBack) {
    if (!callBack) {
        console.log("Fatal error: You should provide a callback to get a random results in Agent model.");
        return process.exit(-1);
    }

    return this.count(function(error, count) {

        if (error) {
            console.log(error);
            return -1;
        }

        var random = Math.round(Math.random() * count -1);
        var result = this.findOne().skip(random);

        return result.exec(function (error, results) {
            return callBack(error, results);
        });
    });
};

//Export
var Agent = mongoose.model('Agent', agentScheme); //Agent is the name of
                    // the collection if does not exits it will create it

module.exports = Agent; //Optional really we don't need it...
                    //We can get our model with:
                    // var Agent = mongoose.model('Agent');