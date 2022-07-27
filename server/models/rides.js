const mongoose = require( 'mongoose');

const Rides = mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require:true
    },
    Passengers:{
        type:String,
    },
    From:{
        type:String,
        require:true
    },
    To:{
        type:String,
        require:true
    },
    PickUpDate:{
        type:String,
    },
    pickUpTime:{
        type:String,
    },
})
module.exports = mongoose.model('Rides', Rides);