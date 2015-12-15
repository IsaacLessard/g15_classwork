var express = require('express');
var parser = require('body-parser')
var serveStatic = require('serve-static')
var app = express();

app.use(parser.urlencoded({ extended: false }))

app.use(serveStatic('public/ftp', {'index': ['default.html', 'default.htm']}))

app.post('/', function(req, res) {
  console.log(req.body)
  res.send("hello yall")
})



app.listen(3000);
