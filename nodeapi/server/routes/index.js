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

module.exports = router;
