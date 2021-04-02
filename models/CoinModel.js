const mongoose = require('mongoose')
const Schema = mongoose.Schema

const historySchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    CoinName:String,
    Type: String,
    Volum : Number,
    Profit : Number,
    PriceIn : Number,
},
{ timestamps: true}
)

module.exports = mongoose.model("History", historySchema)