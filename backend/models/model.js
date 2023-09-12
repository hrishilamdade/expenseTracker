const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    remarks:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("transaction",transactionSchema)