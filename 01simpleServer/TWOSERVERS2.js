const http = require('http')
const port = 4000

const requestHandler = (request, response) => {
  console.log("Request hits SERVER 2", request.url);
  //Extract the numbers from the url "/53/23" -> [53, 23]
  const numbers = request.url.split("/").filter(Number).map(item => parseInt(item, 10));
  const result = numbers[0] * numbers[1]
  console.log(`Result calculated on SERVER 2 = ${result}`);
  //response is just accepting strings, no numbers or object
  response.write(result.toString())
  response.end()
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
