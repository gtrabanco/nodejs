"use strict";

var express = require('express');
var router = express.Router();
var readDependecies = require('../lib/dependencies');


router.get('/', function(req, res, next){
    var path = require('path');
    var results = readDependecies(path.join(__dirname, '../'));

    var vars = {pkgInfo: results[0], dependencies: results[1]};

    res.render('package', vars);
});

module.exports = router;