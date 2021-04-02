const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    Username : {type:String, require:true,unique:true},
    Name : {type: String},
    Email : {type: String,require:true,unique:true},
    Password : {type:String},
    Role : {type:String, default:'USER'},
},
{ timestamps: true}
)

module.exports = mongoose.model("User", userSchema)