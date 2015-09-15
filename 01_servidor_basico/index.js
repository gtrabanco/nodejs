/* Created by Gabriel Trabanco <gtrabanco@fwok.org> */
"use strict";

var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {'Content-type': 'text/plain'});
    response.end('Wake up, Neo... But wait I added this wait.. Would you bring me the change nodemon?\n');
});

server.listen(8080, '127.0.0.1');
console.log('Server started');