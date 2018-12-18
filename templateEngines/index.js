const express = require("express");
const app = express();
const Handlebars = require("handlebars");
const path = require("path");

const items = [
  {
    name: "Fungi",
    price: "7",
    onSale: true
  },
  {
    name: "Hawai",
    price: "9",
    onSale: false
  }
];
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({layout: false}));
app.set('view engine', 'handlebars');

Handlebars.registerHelper("total", function(pizzas) {
  console.log('pizzas', pizzas);
  let result = pizzas.reduce((acc, item) => acc + parseInt(item.price), 0);
  return result;
});

app.get("/", function(req, res) {
  res.render("index", {items: items});
});

app.listen(8000);
