const mongoose = require('mongoose');


const schema = mongoose.Schema({
    name: String,
    email: String,
    district: String,
    state: String,
    isIndus: Boolean
});