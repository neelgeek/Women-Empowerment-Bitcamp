//In this file we will bring combine all model and controllers 

//dont touch this file anyhow 
//this file is not meant to mess with me


const fs = require('fs');
//fs module to to read directory and include all required controllers and model files
// in main app

const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dbName = "wahmen";
mongoose.connect('mongodb://localhost/' + dbName);
mongoose.connection.once('open', function(err) {
    if (err) throw err;
    console.log("successfully connected to database!");
})


//In this project we are going to use express library 
//because it has good routing facility and also we can create mini apps using routers
// It also has good Request Response module which same can also be implemented using http module

const bodyParser = require('body-parser');

//In this app we will be getting many body parameters to parse them and use them We have
//Included this module

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//initialized express app.
//for monitoring app
app.use(require('morgan')('dev'))

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:8080'
    })
    next();
})
app.use(require('cors')({
    origin: 'http://localhost:8080',
    credentials: true
}));
//initialized body parser

app.use(bodyParser({ limit: '50mb' }));

app.use(session({
    name: 'mySessionVariable',
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    secure: false,
    cookie: {

        httpOnly: false,
        secure: false
    }
}));

fs.readdirSync('./controllers').forEach(function(file) {
        if (file.indexOf('.js')) {
            const route = require('./controllers/' + file);
            route.controllerFunction(app);
        }
    })
    //included all controller files in main app using readdirSync which comes with fs module
    //it reads all files synchronously one by one and includes them using require function

fs.readdirSync('./schema').forEach(function(file) {
        if (file.indexOf('.js')) {
            require('./schema/' + file);
        }
    })
    //included all model files in main app using readdirSync which comes with fs module
    //it reads all files synchronously one by one and includes them using require function

app.listen(8000, function() {
    console.log("app server running on port:8000");
})