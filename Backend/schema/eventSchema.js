const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    address: String,
    district: String,
    info: String
});

module.exports = schema;