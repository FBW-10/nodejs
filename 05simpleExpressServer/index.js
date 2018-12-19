require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
  console.log("###", req.headers);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const users = [
  { id: 30, name: "Alice" },
  { id: 31, name: "Franz" },
  { id: 32, name: "Marie" },
  { id: 33, name: "Bob" }
];

const requestHandler = (req, res) => {
  console.log("Server got a hit");
  res.send("Route / ");
};

const usersHandler = (req, res) => {
  console.log("Route all users");
  res.send(users);
};

const singleUsersHandler = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  console.log(`Route /users/:id hit and found user: `, user);
  res.send(user);
};

app.get("/", requestHandler);
app.get("/users", usersHandler);
app.get("/users/:id", singleUsersHandler);

app.get("/*", (req, res) => {
  console.log("Fallback route for stupid things like curl localhost:5000/dkaslfh");
  res.send("Wildcard route");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
