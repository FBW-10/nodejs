require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const users = [
  { id: 30, name: "Alice" },
  { id: 31, name: "Franz" },
  { id: 32, name: "Marie" },
  { id: 33, name: "Bob" }
];

const requestHandler = (req, res) => {
  console.log("Server got a hit");
  res.send("/ route hit");
};
const usersHandler = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  console.log(`/users/:id route hit and found user: `, user);
  res.send(user);
};

var myLogger = function(req, res, next) {
  console.log("Request on all routes", Date.now());
  next();
};

app.use(myLogger);
app.get("/", requestHandler);
app.get("/users/:id", usersHandler);
app.get("/*", (req, res) => {
  console.log("Fallback route for stupid things like curl localhost:5000/dkaslfh");
  res.send("Wildcard route");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
