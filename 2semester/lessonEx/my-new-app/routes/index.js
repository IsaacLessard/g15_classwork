var express = require('express');
var router = express.Router();
var app = express();


var verses = { verse1 : "This is the song that never ends",
  verse2 : "Yes it goes on and on my friend",
  verse3 : "Some people started singing it not knowing what it was",
  verse4 : "But people kept singing it just because"}


  /* GET home page. */
  router.get('/', function(req, res, next) {
      res.render('index', { title: 'Verse 1', verse: verses.verse1, srcImg: "http://rophydoes.rintin.com/wp-content/uploads/2011/01/lambchop1.jpg", next: "/verse-2" });

  });

  router.get('/:verse', function (req, res, next) {

    if (req.params.verse === 'verse-2') {
      res.render('index', { title: 'Verse 2', verse: verses.verse2, srcImg: "http://i.ytimg.com/vi/1_47KVJV8DU/mqdefault.jpg", next: "/verse-3" });
    }
    if (req.params.verse === 'verse-3') {
      res.render('index', { title: 'Verse 3', verse: verses.verse3, srcImg: "http://media-cache-ak0.pinimg.com/236x/4d/61/6c/4d616c5f67a37d1b7db7acc79a3dcf03.jpg", next: "/verse-4" });
    }
    if (req.params.verse === 'verse-4') {
      res.render('index', { title: 'Verse 4', verse: verses.verse4, srcImg: "http://media-cache-ak0.pinimg.com/236x/75/a1/d4/75a1d4cba1954c1abee9b4bd85d21de9.jpg", next: "/" });
    }

  })
  //
  // router.get('/verse-2', function(req, res, next) {
  //   res.render('index', { title: 'Verse 2', verse: verses.verse2, srcImg: "http://i.ytimg.com/vi/1_47KVJV8DU/mqdefault.jpg", next: "/verse-3" });
  // });
  //
  // router.get('/verse-3', function(req, res, next) {
  //   res.render('index', { title: 'Verse 3', verse: verses.verse3, srcImg: "http://media-cache-ak0.pinimg.com/236x/4d/61/6c/4d616c5f67a37d1b7db7acc79a3dcf03.jpg", next: "/verse-4" });
  // });
  //
  // router.get('/verse-4', function(req, res, next) {
  //   res.render('index', { title: 'Verse 4', verse: verses.verse4, srcImg: "http://media-cache-ak0.pinimg.com/236x/75/a1/d4/75a1d4cba1954c1abee9b4bd85d21de9.jpg", next: "/" });
  // });

module.exports = router;
