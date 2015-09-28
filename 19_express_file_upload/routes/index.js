var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var util = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.all('/file-upload', function(req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (error, fields, files) {
        console.log(util.inspect({fields: fields, files: files}));
        res.send('Finished');
    });
});

module.exports = router;
