var environment = process.env.NODE_ENV || 'development';
var config = reuqire('../knexfile')[environment]
module.exports = require('knex')(config);
