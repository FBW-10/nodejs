console.log('Prints the size of this file. Otherwise run this script with the path to a file. Eg:')
console.log('node filesize/index.js ~/Desktop/screenshot.png\r\n');

const fs = require('fs');
const file = process.argv[2] !== undefined ? process.argv[2] : __filename

function fileSize(fileName, cb){
console.time('Processing time');
  if (typeof fileName !== "string"){
    return cb(new TypeError('arguments should be string'))
  }
  fs.stat(fileName, (err, stats) => {
    if (err) {
      return cb(err);
    }
    cb(null, stats.size)
  })
}

fileSize(file, (err, size) => {
  if (err) throw err;
  console.log(`Size: ${size} Byte - ${size/1024} KB - ${size/1024/1024} MB`);
  console.timeEnd('Processing time');
})
