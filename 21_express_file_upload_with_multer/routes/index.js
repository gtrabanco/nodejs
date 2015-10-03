"use strict";

var express = require('express');
var router = express.Router();
var util = require('util');
var multer = require('multer');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/file-upload', function(req, res, next) {
    console.log(req.file);
    console.log(req.files);
    console.log(req.body); //The params in the form that are not the files
    res.send('Ended');
});

module.exports = router;
