// Import the ORM to create functions that will interact with DB
let orm = require('../config/orm.js');

let burger = {
    all: (cb) => {
        orm.selectAll((result) => {
            cb(result);
        })
    },
    insert: (burger_name, cb) => {
        orm.insertOne(burger_name, (result) => {
            console.log(burger_name);
            cb(result);
        })
    },
    update: (id, cb) => {
        orm.updateOne(id, (result) => {
            console.log(id + ' added!');
            cb(result);
        })
    }
}

//Export the databse functions for the controller
module.exports = burger;