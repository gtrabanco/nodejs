"use strict";

var express = require('express');
var router = express.Router();
var util = require('util');
var multer = require('multer');
console.log('The dir is');
console.log('The router', router.get('upload dir'));
var upload = multer({dest: app.get('upload dir')});


//MULTER!!
//Just one of this
//app.use(upload.single('onefile')); //req.file
//app.use(upload.array('somefiles')); // req.files
// We also provide a second parameter with the number of files

//Some fields with files (more than one in one form)
let fields = [
    {
        name: 'onefile',
        maxCount: 1
    },
    {
        name: 'somefiles',
        maxCount: 8
    }
];
//app.use(upload.fields(fields)); //req.files.onefile && req.files.somefiles

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
