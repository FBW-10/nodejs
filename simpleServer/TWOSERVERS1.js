const http = require('http')
const port = 3000
const httpRequest = require('request');

const requestHandler = (request, response) => {
  httpRequest(`http://localhost:4000${request.url}`, function (error, httpResponse, body) {
    console.log("body", body);
    response.end(body)
  });
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  console.log(`server is listening on ${port}`)
})
