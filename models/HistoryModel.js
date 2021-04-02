const mongoose = require('mongoose')
const Schema = mongoose.Schema

const coinSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    // Name:String, //[{Name:"",Volum:1234,Capital:1234}]
    // Volum:Number,
    // Cost:Number,
    // Avgtrad:Number
    coin:Array
},
{ timestamps: true}
)

module.exports = mongoose.model("Coin", coinSchema)