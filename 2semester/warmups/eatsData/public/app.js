var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var menu = {menu: [
  {
    id: 1,
    type: "burger",
    name: "Cheeseburger",
    price: 10.99
  },
  {
    id: 2,
    type: "pizza",
    name: "Cheese Pizza",
    price: 9.99
  },
  {
    id: 3,
    type: "burger",
    name: "Hamburger",
    price: 8.99
  },
  {
    id: 4,
    type: "pizza",
    name: "Pepperoni Pizza",
    price: 11.99
  },
  {
    id: 5,
    type: "pizza",
    name: "Sausage Pizza",
    price: 12.99
  }
]}

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  next();
})

app.get('/menu', function (req, res) {
  res.send(menu)
})

app.listen(3000, function () {
  console.log("listening on 3000")
})
