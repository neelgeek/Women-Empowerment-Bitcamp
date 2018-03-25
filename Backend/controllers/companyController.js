const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const companyModel = require('../models/companyModel');


module.exports.controllerFunction = function(app) {

    router.post('/signup', (req, res) => {
        let company = new companyModel();
        let details = req.body;
        console.log(details);
        company.save(details).then(user => {
            res.status(200).json(user);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        });
    });

    router.post('/signin', (req, res) => {
        let company = new companyModel();
        let email = req.body.email;

        company.findCompany(email).then(userDetails => {
            console.log(userDetails.password, req.body.password);
            if (userDetails.password == req.body.password) {
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


    router.post('/postjob', (req, res) => {

    });

    app.use('/company', router);
}