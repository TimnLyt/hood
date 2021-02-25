const mongoose = require('mongoose');


// This is Thien editing the user profile 
const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String;
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone: {
        type:String,
        required:true
    },
    location: {
        type:String,
        required:false

    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;