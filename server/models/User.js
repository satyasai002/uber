const mongoose = require( 'mongoose');

const User = mongoose.Schema({
    UserName:{
        type: String,
        required: true,
    },
    Mobile:{
        type: Number,
        required: true,
    },
    Email:{
        type: String,
        unique: true,
        required: true,
    },
    Password:{
        type: String,
    },
    ConfirmPassweord:{
        type:String,
    },
    Rides:{
        type: String,
    },
    

});

module.exports = mongoose.model('User', User);