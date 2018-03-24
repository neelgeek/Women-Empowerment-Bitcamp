const mongoose = require('mongoose');
const userSchema = require('../schema/userSchema');

class User {
    constructor() {
        this.userModel = mongoose.model('user', userSchema);
    }

    save(details) {
        let user = new this.userModel(details);
        return user.save().then(userdet => {
            return userdet
        }).catch(err => {
            throw err;
        });
    }

    findUser(mobile) {
        return this.userModel.find({ mobile }).then(userDet => {
            if (userDet.length > 0) {
                return userDet;
            } else {
                throw new Error("No user Found");
            }
        }).catch(err => {
            throw err;
        })
    }
}

module.exports = User;