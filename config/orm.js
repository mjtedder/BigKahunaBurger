// Import MySQL connection.
let connection = require('../config/connection.js');

// Object for all SQL statement functions to be used
let orm = {

    //selectAll
    selectAll: (cb) => {
        let queryString = 'SELECT * FROM burgers;'
        connection.query(queryString, (err, res) => {
            if(err) { throw err;
            }
            cb(res);
        });
    },
    //insertOne
    insertOne: (cb) => {
        let queryString = 'INSERT INTO burgers (burger_name) VALUE (?);'
        connection.query(queryString, burger_name, (err, result) => {
            if(err) { throw err;
            }
            cb(result);
        });
    },
    //updateOne
    updateOne: (id, cb) => {
        let queryString = 'UPDATE burgers SET ? WHERE ?;'
        connection.query(queryString, {id: id}, (err, result) => {
            if(err) { throw err;
            }
            cb(result);
        })
    }
}

// Export orm object
module.exports = orm;