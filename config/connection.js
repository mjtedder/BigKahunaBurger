//Set up MySQL connection
let mysql = require('mysql');

let connection;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    connection = mysql.createConnection({
        root: 3000,
        host: "localhost",
        user: "root",
        password: process.env.password,
        database: "burgers_db",
    });
};

//Connecting to DB
connection.connect((err) => {
    if(err) {
        console.err('error connection: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// Export connection to the ORM
module.exports = connection;