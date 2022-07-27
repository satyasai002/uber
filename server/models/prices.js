const mongoose = require( 'mongoose');

const Prices = mongoose.Schema({
    Car1:{
        type: String,
        require:true
    },
    Car2:{
        type:String,
        require: true
    },
    Car3:{
        type:String,
        require: true
    },
    Car3:{
        type:String,
        require: true
    },
})
module.exports = mongoose.model('Prices', Prices);