const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    date: { type: Date, default: Date.now },
    location: String,
    time: Number
});

const User = mongoose.model('User', UserSchema);

module.exports = User;