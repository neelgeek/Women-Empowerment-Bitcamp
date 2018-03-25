const eventModel = require('../models/eventModel');
const express = require('express');
const router = express.Router();


module.exports.controllerFunction = function(app) {

    router.post('/register', (req, res) => {
        let newEvent = new eventModel();
        newEvent.createEvent(req.body).then(eventinfo => {
            res.status(200).json(eventinfo);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        })
    });

    router.post('/getEvents', (req, res) => {

    })

    app.use('/event', router);
}