var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var routes = require('./routes/index');
var users = require('./routes/users');
var packageRoute = require('./routes/package');
var dbRoute = require('./routes/mysql');
var mongoskinRoute = require('./routes/mongoskin');
var mongooseRoute = require('./routes/mongoose')

var app = express();

//App dir
app.set('app path', __dirname);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Disable the x-powered-by
app.set('x-powered-by', false);
//app.disable('x-powered-by'); //Both equivalent

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//Auth
app.use('/apiv1', function(request, response, next){
    console.log(request.headers);
    next();
});

app.use('/', routes);
app.use('/users', users);
app.use('/package', packageRoute);
app.use('/db', dbRoute);
app.use('/mongosk', mongoskinRoute);
app.use('/mongoose', mongooseRoute);
app.use('/apiv1', require('./routes/apiv1/agents'));
app.use('/protected', require('./routes/protected'));
app.use('/jwt', require('./routes/jwt'));


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
