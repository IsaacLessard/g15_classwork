var express = require('express')
var router = express.Router();
var knex = require('../db/knex')

var knex = require('knex')({
  client:'pg',
  connection: 'http://localhost/staff'
})

router.get('/', function (request, response) {
  knex('staff').select().then(function(staff){
    response.json(staff);
  })
})

router.get('/:id', function(request, response) {
  knex('staff').select()
    .where('id', request.params.id)
    .then(function(staff){
      response.json(staff)
    })
})

router.post('/', function (request, response) {
  knex('staff').insert({
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    dob: request.body.dob,
    email: request.body.email
  }, "id").then(function(id){
    res.json(result)
  });
});

router.put('/:id', function (request, response) {
  knex('staff').where('id', request.params.id).update({
    first_name: request.body.first_name
  }).then(function(result) {
    res.json(result)
  })
})

router.delete('/:id', function (request, response) {
  knex('staff').where('id', req.params.id).del().then(function(result) {
    res.json(result);
  });
});

module.exports = router;
