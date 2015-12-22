var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var api = require('./api');

var app = express();

app.set('view engine', 'ejs')

passport.use(new LocalStrategy(function (username, password, done) {
  api.login.read(username, password)
  .then(function (results) {
    done(null, results.rows[0])
  })
  .catch(function (error) {
    done(error)
  })
}))

passport.serializeUser(function (user, done) {
  done(null, JSON.stringify(user))
})

passport.deserializeUser(function (id, done) {
  done(null, JSON.parse(id))
})

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))
app.use(session({
  secret: 'mysecret',
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.get('/', function (req, res) {
  res.render('index.html');
})

app.get('/login', function (req, res) {
  if (req.isAuthenticated()) {
    res.redirect('/loggedin')
    return
  }
  res.end('Please login homie')
})

app.post('/login',
  passport.authenticate('local'),
  function (req, res) {
    res.end('login successful: ' + req.user.username)
  }
)

app.get('/loggedin', function (req, res) {
  if (!req.isAuthenticated()) {
    res.redirect('/login')
    return
  }
  res.end('Welcome to the site homie')
})

app.post('/register', function (req, res) {
  api.login.create(req.body.username, req.body.password)
  .then(function (results) {
    res.end('Regiester successful: ' + req.body.username)
  })
  .catch(function (error) {
    res.statusCode = 409
    res.send(error)
  })
})

app.post('/logout', function (req, res) {
  res.logout()
  res.end('logged out')
})

app.listen(8080)
