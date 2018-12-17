console.log("Get all records, or one by id");
console.log("curl localhost:3000/users returns all Users");
console.log("curl localhost:3000/users/1 returns just Alice");
const http = require('http')
const port = 3000

const requestHandler = (request, response) => {

  const users = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Franz"},
    {id: 3, name: "Marie"}
  ]
  if(request.url === '/users'){
    console.log("GET all users");
    console.log(users);
    content = users
  } else if(request.url.indexOf('users') !== -1) {
    let userId = request.url.split('/').reverse()[0]
    console.log("GET a specific user");
    console.log(users[userId - 1]);
    content = users[userId - 1]
  }
  const json = JSON.stringify(content);
  response.end(json);
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  console.log(`server is listening on ${port}`)
})
