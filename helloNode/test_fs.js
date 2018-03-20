'use strict'
var fs = require('fs');
var data = '';
fs.readFile('readme.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('async:' + data);
    }
});
console.log('123');
try {
    data = fs.readFileSync('readme.txt', 'utf-8');
}
catch (err) {
    //error
}
console.log('sync:' + data);

//wirte file
var line =`${data}, i am wangweidong`;
fs.writeFile('readme.txt', line, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('success')
    }
});