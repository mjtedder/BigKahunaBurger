// Required Dependencies
let express = require('express');

// Importing burger model to use its database functionality
let burger = require('../models/burger.js');

// Using express router
let router = express.Router();

// Create all routes and set up logic within those routes

// Home
router.get('/', (req, res) => {
    res.redirect('/index');
});

// selectAll
router.get('/index', (req, res) => {
    burger.all((data) => {
        let object = {
            burgers: data
        };
        console.log(object);
        res.render('index', object);
    });
});

// insertOne
router.post('/api/burgers', (req, res) => {
    burger.insert(req.body.burger_name, (data) => {
        // Send back the ID of the new burger
        res.json({ id: result.insertId});
        res.redirect('/index');
    });
});

// updateOne
router.put('/api/burgers/:id', (req, res) => {
    let condition = req.params.id;

    console.log(condition);

    burger.update(condition, (data) => {
        res.redirect('/index');
    });
});

// Export routes for server to use
module.exports = router;