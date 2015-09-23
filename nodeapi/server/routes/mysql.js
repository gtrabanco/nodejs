"use strict";

var express = require('express');
var router = express.Router();
var db = require('../lib/database');


/* GET home page. */
router.get('/', function(request, response, next) {
    db.query('SELECT * FROM agentes', function(error, results){
        if (error) {
            return next(error);
        }

        response.render('mysql', {title: "Agents", rows: results});
    });
});


module.exports = router;