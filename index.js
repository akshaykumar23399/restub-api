const express = require('express')
const app = express()
const apiRoutes = require('./api-routes.js')
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.set('json spaces', 4);

app.use(bodyParser.urlencoded( {
    extended: true
}))

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/restub');

var db = mongoose.connection;

app.get('/', (req, res) => res.send('Hello World with Express'))

app.use('/api', apiRoutes)

app.listen(port, () => {
    console.log("Running RESTub on port " + port)
})
