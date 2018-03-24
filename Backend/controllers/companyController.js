const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


module.exports.controllerFunction = function(app) {

    router.post('/signin', (req, res) => {

    });

    app.use('/company', router);
}