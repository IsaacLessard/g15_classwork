var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];
module.exports = require('knex')(config);

var knex = require('../db/knex');
function Albums() {
  return knex('albums');
}
