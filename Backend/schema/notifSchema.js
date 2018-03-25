const mongoose = require('mongoose');

const NotifSchema = mongoose.Schema({
    userid: mongoose.Schema.Types.ObjectId,
    notification: String,
    jobId: mongoose.Schema.Types.ObjectId
});

module.exports = NotifSchema;