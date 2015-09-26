"use strict";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'NodeApi',
      description: 'This is a fascinating api from the <a href="http://keepcoding.io">KeepCoding</a> Master Bootcamp.',
      list: ["one", "two", "three", "four"],
      even: (((new Date()).getSeconds() % 2) === 0) ? 'even': 'odd'
  });
});

router.get('/agent', function (request, response, next) {
    var path = require('path');
    var browscap_file = path.join(__dirname, '..', 'data', 'browscap.json');
    var browscap = require('browscap-js');
    //browscap.setJson(browscap_file);

    response.json({browser: browscap.getBrowser(request.headers['user-agent'])});
});




module.exports = router;