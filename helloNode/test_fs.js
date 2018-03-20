'use strict'
var fs = require('fs');
var data = '';
//read file
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
var line = `${data}, i am wangweidong`;
fs.writeFile('readme.txt', line, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('success')
    }
});


//read file stat
fs.stat('readme.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        console.log('---------------------------');
        console.log('isFile:' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
        console.log('---------------------------');
    }

});