var express = require('express');
var app = express();


//
// app.get('/add/:num1/:num2', function(req, res) {
//   var n1 = req.params.num1;
//   var n2 = req.params.num2;
//   var total = parseInt(n1) + parseInt(n2);
//   res.send(total.toString())
// });
//
// app.get('/sub/:num1/:num2', function(req, res) {
//   var n1 = req.params.num1;
//   var n2 = req.params.num2;
//   var total = parseInt(n1) - parseInt(n2);
//   res.send(total.toString())
// });
//
// app.get('/mult/:num1/:num2', function(req, res) {
//   var n1 = req.params.num1;
//   var n2 = req.params.num2;
//   var total = parseInt(n1) * parseInt(n2);
//   res.send(total.toString())
// });
//
// app.get('/div/:num1/:num2', function(req, res) {
//   var n1 = req.params.num1;
//   var n2 = req.params.num2;
//   var total = parseInt(n1) / parseInt(n2);
//   res.send(total.toString())
// });

app.get('/:opp/:num1/:num2', function(req, res) {
  var n1 = req.params.num1;
  var n2 = req.params.num2;
  if (req.params.opp === "add") {
    var total = parseInt(n1) + parseInt(n2);
  }
  if (req.params.opp === "sub") {
    var total = parseInt(n1) - parseInt(n2);
  }
  if (req.params.opp === "mult") {
    var total = parseInt(n1) * parseInt(n2);
  }
  if (req.params.opp === "div") {
  var total = parseInt(n1) / parseInt(n2);
  }

  res.send(total.toString())
})

app.listen(3000);
