console.log("Two endpoints");
console.log("curl localhost:3000/users");
console.log("curl localhost:3000/todos");
const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  let content = {}

  switch(request.url) {
    case '/users':
      console.log("Route users");
      content = [ {name: "Alice"}, {name: "franz"} ]
      break;
    case '/todos':
      console.log("Route todos");
      content = [ {name: "Buy milk"}, {name: "Reply to email"} ]
      break;
    default:
      content = 'welcome to our api'
      break;
  }

  const json = JSON.stringify(content);
  response.end(json);
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  console.log(`server is listening on ${port}`)
})
