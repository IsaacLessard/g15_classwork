var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var staffRoute = require('./routes/staff');

var app = express();


app.set('port', process.env.PORT || 3000)

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser())
app.use(express.static(path.join(_dirname, 'public')))

app.use('/staff', staffRoute);


app.use(function (req, res, next) {
  res.status(404);
  res.send('404 - Not Found');
})


app.listen(app.get('port'), function () {
  console.log('Server started on http://localhost:' +
    app.get('port')+'; press Ctrl-C to terminate');
})

module.exports = app;
