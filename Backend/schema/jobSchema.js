const mongoose = require('mongoose');

const job = mongoose.Schema({
    title: String,
    skills: Array,
    days: number,
    pay: number
});

module.exports = job;