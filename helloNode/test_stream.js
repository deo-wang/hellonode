'use strict'
var fs = require('fs');

var rs = fs.createReadStream('readme.txt', 'utf-8');
rs.on('data', function (d) {
    console.log(d);
}).on('end', function () {
    console.log('read finish;');
}).on('error', function (err) {
    console.log('error:' + err);
});

var ws = fs.createWriteStream('readme.txt', 'utf-8');
ws.write('write stream first!!');
ws.write('write stream second!!');
ws.write('write stream three!!');
ws.write('\n');
ws.write('four');
ws.end;

//pipe
console.log('pipe start');
var rss = fs.createReadStream('readme.txt');
var wss = fs.createWriteStream('copy.txt');

rss.pipe(wss, { end: false });