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

//Export
var Agent = mongoose.model('Agent', agentScheme);

module.exports = Agent; //Optional really we don't need it...
                    //We can get our model with:
                    // var Agent = mongoose.model('Agent');