"use strict";

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Set the upload dir
let uploadDir = path.join(__dirname, 'upload');
app.set("upload dir", uploadDir);



//*

//Load the multer library
var multer = require('multer');
var upload = multer({dest: uploadDir});
//MULTER!!
//Just one of this
app.use(upload.single('onefile')); //req.file
//app.use(upload.array('somefiles')); // req.files
                    // We also provide a second parameter with the number of files

////Some fields with files (more than one in one form)
//let fields = [
//    {
//        name: 'onefile',
//        maxCount: 1
//    },
//    {
//        name: 'somefiles',
//        maxCount: 8
//    }
//];
//app.use(upload.fields(fields)); //req.files.onefile && req.files.somefiles
//We also do app.use('/route/to/actionform', upload.fields(fields); //Or upload.single or upload.array

//*/


app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
