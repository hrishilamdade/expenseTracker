const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    bank_name:{
        type:String,
        required:true
    },
    balance:{
        type:Number,
        required:true
    },
    account_type:{
        type:String,
        required:true
    },
    account_number:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("account",accountSchema)
