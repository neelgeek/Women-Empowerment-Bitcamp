const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    mobile: { type: Number, unqiue: true },
    password: String,
    age: Number,
    address: String,
    city: String,
    pincode: Number,
    district: String,
    state: String,
    skills: Array,
    isHired: { type: Boolean, default: false }
});


module.exports = userSchema;