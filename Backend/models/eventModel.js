const mongoose = require('mongoose');
const eventSchema = require('../schema/eventSchema');


class event {
    constructor() {
        this.eventModel = mongoose.model('events', eventSchema);
    }

    createEvent(details) {
        let newEvent = new this.eventModel(details);
        return newEvent.save().then(eventDet => {
            return eventDet
        }).catch(err => {
            throw err;
        })
    }
}

module.exports = event;