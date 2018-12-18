const express = require('express')  
const app = express();
const Handlebars = require('handlebars')  
const expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({layout: false}));
app.set('view engine', 'handlebars');
const items = [{
  name: 'Fungi',
  price: '7',
  onSale: true
}, {
  name: 'Hawai',
  price: '9',
  onSale: false
}]
Handlebars.registerHelper('total', function(items) {
  let result = items.reduce((acc, item) => acc + parseInt(item.price), 0)
  return result;
});
app.get('/', function(req, res) {  
  res.render("index", {items: items});
});
app.get('/about', function(req, res) {  
  res.render("about");
});
app.get('contact', function(req, res) {  
  res.render("contact");
});

app.listen(8000);  