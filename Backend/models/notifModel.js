const mongoose = require('mongoose');
const notifSchema = require('../schema/notifSchema');

class Notification {

    constructor() {
        this.notifModel = mongoose.model('notification', notifSchema);
    }

    createNotification(details) {
        let newNotif = new this.notifModel(details);
        return newNotif.save().then(notif => {
            return notif;
        }).catch(err => {
            throw err;
        })
    }

}

module.exports = Notification;