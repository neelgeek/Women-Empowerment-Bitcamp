const express = require('express');
const router = express.Router();
const jobModel = require('../models/jobModel');


module.exports.controllerFunction = function(app) {

    router.post('/postJob', (req, res) => {
        let newJob = new jobModel();

        newJob.postJob(req.body).then(job => {
            res.status(200).json(job);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        });
    });

    router.post('/find', (req, res) => {
        let skills = req.body.skills;
        console.log(req.body);
        let userWithSkills = new jobModel();
        userWithSkills.searchWomen(skills).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        });
    });

    router.post('/hire/:id/:jobid', (req, res) => {
        let userid = req.params.id;
        let jobid = req.param.jobid;
        let user = new jobModel();
        user.hire(userid).then(useresponse => {
            user.addEmployee(userid, jobid).then(result => {
                res.status(200).json(result);
            }).catch(err => {
                throw err;
            })
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        })
    });



    app.use('/job', router);
}