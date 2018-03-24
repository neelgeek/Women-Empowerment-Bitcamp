const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    mobile: Number,
    password: String,
    age: Number,
    address: String,
    city: String,
    pincode: Number,
    district: String,
    state: String,
    skills: Array
});


module.exports = userSchema;