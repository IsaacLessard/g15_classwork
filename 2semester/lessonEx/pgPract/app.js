var Express = require('express')
var app = Express()
var api = require('./api')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

function handleResponse(promise, res) {
  if (!res) {
    console.error('response object required for handleResponse')
    return
  }
  promise.then(function (results) {
    res.json(results)
  })
  .catch(function (err) {
    res.statusCode = 503
    res.json(err)
  })
}

app.get('/dogs', function (req, res) {
  handleResponse(api.dog.read(), res)
})

app.get('/dogs/:id', function (req, res) {
  handleResponse(api.dog.create(req.params.id), res)
})


app.listen(8080, function () {
  console.log("server is listening on port 8080")
})
