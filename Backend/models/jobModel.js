const mongoose = require('mongoose');
const jobSchema = require('../schema/jobSchema');
const userSchema = require('../schema/userSchema');

class Job {
    constructor() {
        this.jobModel = mongoose.model('job', jobSchema);
        this.userModel = mongoose.model('user', userSchema);
    }

    postJob(details) {
        let newJob = new this.jobModel(details);
        return newJob.save().then(job => {
            return job;
        }).catch(err => {
            throw err;
        })
    }

    searchWomen(skil) {
        console.log(skil);
        return this.userModel.find({ skills: { $in: skil }, isHired: false })
            .then(users => {
                return users;
            })
            .catch(err => {
                throw err;
            });
    }

    hire(id) {
        return this.userModel.findByIdAndUpdate(id, { isHired: true }).then(user => {
            return user;
        }).catch(err => {
            throw err;
        });
    }

    addEmployee(id, jobid) {
        return this.jobModel.update({ _id: jobid }, { $push: { hired: id } }).then(updatedJob => {
            return updatedJob;
        }).catch(err => {
            throw err;
        });
    }
}

module.exports = Job;