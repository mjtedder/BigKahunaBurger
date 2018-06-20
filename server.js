require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser');

let PORT = process.env.PORT || 3000;

let app = express();

let routes = require('./controller/burgersController.js');

app.use(routes);

//Start server so it can listen to requests
app.listen(PORT, () => {
    //Log (back-end) when server has started
    console.log('Server listening on: http://localhost:' + PORT);
});