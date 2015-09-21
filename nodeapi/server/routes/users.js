var express = require('express');
var router = express.Router();

/* GET users listing. */

//We can also pass vars in body but get does not have body because it is only for petitions



//This will response / or /?var=foo (...)
router.get('/', function(req, res, next) {
    res.send('Respond to the main');
    console.log('The query string', req.query);
});


//Because the previous route this wont response to / but it could if it where firts
//And to a param like /id/7 or /id/ashfjkjs
router.get('/id/:id([0-9]*)?', function(req, res, next) {
    res.send('Respond to a var');
    var id = parseInt(req.params.id);

    console.log('Petition for a user id %d', id);

    //If we didn't receive a valid id, we dont need to process all, do we?
    if (id > 0) {
        console.log('The requested user was %d', req.params.id);


        //And maybe it would be a great idea use query strings for filters like age, for example
        if (req.query.length > 0) {
            //The if is not neccessary it just would return undefined or nan to the vars
            //just make yourself sure you are receiveing what you want
            console.log("Query string received: ", req.query);
            var ageFilter = parseInt(req.query.age);
            console.log("The age filter for %d is %s", req.params.id, (ageFilter > 0? ageFilter:"No valid age"));
        }
    }
});

router.put('/', function(req, res, next){
    console.log('body', req.body);
    res.send('Responding to a post.');
});

router.all('/json', function(req, res, next){
    console.log('Petition to a json path.');
    res.type('json');
    res.send({foo:'baz', xyz: 'xyz value'});
})

module.exports = router;
