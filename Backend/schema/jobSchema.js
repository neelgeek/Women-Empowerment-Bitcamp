const mongoose = require('mongoose');

const job = mongoose.Schema({
    title: String,
    skills: Array,
    days: Number,
    pay: Number
});

module.exports = job;