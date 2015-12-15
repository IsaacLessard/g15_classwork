var pg = require('pg')

var connectionString = 'postgres://localhost:/pqpract'

function runQuery(query, parameters) {
	return new Promise( function (resolve, reject) {
		pg.connect(connectionString, function (err, client, done) {
			if (err) {
				console.log(err);
				reject(err);
				done();
				return;

			}
			client.query(query, parameters, function (err, results) {
				done()
				if (err) {
					console.error(err)
					reject(err)
					return
				}
				resolve(results)
			})
		})
	})
}

module.exports = {
	dog: {
		create: function (name) {
			return runQuery('INSERT INTO dogs VALUES (default, $1);', [name])
		},
		read: function (id) {
			return runQuery('SELECT * FROM dogs WHERE dogs.id=$1;', [id])
		},
		update: function (id, name) {
			return runQuery('UPDATE dogs SET name=$2 WHERE dogs.id=$1;', [id, name])
		},
		'delete': function (id) {
			return runQuery('DELETE FROM dogs WHERE dogs.id=$1;', [id])
		}
	}
}
