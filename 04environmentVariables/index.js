require('dotenv').config()
const http = require('http')
const {requestHandler: renamedModule} = require('./helper')
const port = process.env.PORT || 3000

console.log('process.env.PORT', process.env.PORT);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('process.env.API_KEY', process.env.API_KEY);

const server = http.createServer(renamedModule)

server.listen(port, (err) => {
  console.log(`server is listening on ${port}`)
})
