const mongoose = require('mongoose');


const schema = mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    district: String,
    state: String,
    isIndus: Boolean
});

module.exports = schema;