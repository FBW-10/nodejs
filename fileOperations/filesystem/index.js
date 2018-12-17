console.log('Open big file chunk by chunk and count a word');
console.log(' ');
const fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8')

let i = 0;
let n = 0;
let word = 'localhost';
myReadStream.on('data', function(chunk){
  n++;
  if(chunk.includes(word)) i++;
  console.log(`Chunk received: ${chunk.slice(0, 19)}...`);
})
myReadStream.on('end', () => {
  console.log('End of data');
  console.log('Number of chunks:', n, );
  console.log(`Found '${word}' ${i} times`);
});

