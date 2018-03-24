const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

module.exports.controllerFunction = function(app) {

    router.post('/signup', (req, res) => {
        let user = new userModel();
        let details = req.body;
        user.save(details).then(user => {
            res.status(200).json(user);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        });
    });

    router.post('/signin', (req, res) => {
        let user = new userModel();
        let mobile = req.body.mobile;
        console.log(req.body);
        user.findUser(mobile).then(userDetails => {
            console.log(userDetails);
            if (userDetails.password === req.body.password) {
                res.status(200).json(userDetails);
            } else {
                res.status(500).json({
                    message: false
                });
            }

        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        });
    });

    app.use('/user', router);
}