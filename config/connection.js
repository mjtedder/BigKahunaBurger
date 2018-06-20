//Set up MySQL connection
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.password,
    database: 'burgers_db'
});

//Connecting to DB
connection.connection((err) => {
    if(err) {
        console.err('error connection: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// Export connection to the ORM
module.exports = connection;