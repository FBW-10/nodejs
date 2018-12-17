console.log("Simple http Server");
console.log("curl localhost:3000");
const http = require('http')

const port = 3000

const requestHandler = (request, response) => {
  console.log("Request is hitting SERVER", request.headers.host);
  const json = JSON.stringify({ 
    anObject: {}, 
    anArray: [1,2,3,4], 
    another: "item"
  });
  console.log("###", json);

  response.end(json);
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  console.log(`server is listening on ${port}`)
})
