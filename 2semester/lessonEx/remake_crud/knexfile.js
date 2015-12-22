// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'regly',
      user: '',
      password: ''
    }
  },

  production: {
    client: 'pg',
    connection: ""
  }

};
