const mongoose = require('mongoose');
const companySchema = require('../schema/companySchema');

class company {

    constructor() {
        this.companyModel = mongoose.model('company', companySchema);
    }

    save(details) {
        let company = new this.companyModel(details);
        return company.save().then(company => {
            return company;
        }).catch(err => {
            throw err;
        })
    }

    findCompany(email) {
        return this.companyModel.findOne({ email }).then(userDet => {
            return userDet;
        }).catch(err => {
            throw err;
        })
    }

}

module.exports = company;