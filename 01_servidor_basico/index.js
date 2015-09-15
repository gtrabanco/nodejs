/* Created by Gabriel Trabanco <gtrabanco@fwok.org> */
"use strict";

var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {'Content-type': 'text/html'});
    response.end('<style>html {background-image: url("http://bit.do/wakeupneo");}</style>\n');
});

server.listen(8080, '127.0.0.1');
console.log('Server started');