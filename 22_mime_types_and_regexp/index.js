"use strict";

var mime = require('mime-types');
console.log(mime.lookup('svg'));

//var x = new RegExp('/.+/', 'i');
console.log('image/png'.match(/image\/(.+)/i));

console.log('Check url http://example.com/file.ext', 'http://example.com/file.ext'.match(/^http.+/i));
console.log('Check url /path/to/file.ext', '/path/to/file.ext'.match(/^http.+/i));
