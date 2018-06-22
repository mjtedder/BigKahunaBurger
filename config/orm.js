// Import MySQL connection.
let connection = require('../config/connection.js');

// Object for all SQL statement functions to be used
let orm = {

    //selectAll
    selectAll: (cb) => {
        let queryString = 'SELECT * FROM burgers;'
        connection.query(queryString, (err, result) => {
            if(err) { throw err;
            }
            cb(result);
        });
    },
    //insertOne
    insertOne: (burger_name, cb) => {
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
        connection.query(queryString, [{devoured: true}, {id: id}], (err, result) => {
            if(err) { throw err;
            }
            cb(result);
        })
    },
    //deleteOne
    deleteOne: (id, cb) => {
        let queryString = 'DELETE FROM burgers WHERE ?;'
        conection.query(queryString, {id: id}, (err, result) => {
            if (err) { throw err;
            }
            cb(result);
        })
    }
};

// Export orm object
module.exports = orm;