const request = require('request')
const fs = require('fs');
let string = `userId,id,title,body\n`
request(`https://jsonplaceholder.typicode.com/posts`, (error, httpResponse, body) => {
  const json = JSON.parse(body)
  json.map(p => {
    string+= `${p.userId}${p.id},${p.title},${p.body}\n`
  })
  fs.writeFile('test.csv', string, function(err) {
    if (err) throw err;
    console.log("File written", json.length)
  });
})
