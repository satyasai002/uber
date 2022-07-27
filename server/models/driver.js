const mongoose = require( 'mongoose');

const Driver = mongoose.Schema({
    DriverName:{
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
    Photo:{
        type:String,
        required:true
    },
    Age:{
        type:"string",
        require:true
    },
    CarDetails:{
        type:String,
        required:true
    },
    Password:{
        type: String,
        Default:"0000"
    },
    ConfirmPassweord:{
        type:String,
        require:true
    },
    Rating:{
        type: String,
        require:true
    },
    

});

module.exports = mongoose.model('Driver', Driver);