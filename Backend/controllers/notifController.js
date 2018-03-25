const notifModel = require('../models/notifModel');
const express = require('express');
const router = express.Router();
module.exports.controllerFunction = function(app) {

    router.post('/create', (req, res) => {
        let notification = req.body;
        let newNotif = new notifModel();
        newNotif.createNotification(notification).then(notifres => {
            res.status(200).json(notifres);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            })
        })
    });



    app.use('/notif', router);
}