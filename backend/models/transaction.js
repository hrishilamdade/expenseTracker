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
        type: Date, // Use a String type to store the formatted date
        // validate: {
        //     validator: function (dateString) {
        //         // You can add validation here if needed
        //         // For example, to ensure it's a valid "YYYY-MM-DD" format
        //         return /\d{4}-\d{2}-\d{2}/.test(dateString);
        //     },
        //     message: props => `${props.value} is not a valid date format (YYYY-MM-DD)`,
        // },
        // get : v => new Date(v).toDateString(), // Use a getter to format the date string

    },
    type:{
        type:String,
        required: true
    },
    remarks:{
        type:String,
        required:false
    }
})

module.exports = mongoose.model("transaction",transactionSchema)