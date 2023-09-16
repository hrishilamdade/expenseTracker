const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
// initialize router
const router = express.Router();

//Import models
const TransactionModel = require('../models/transaction')
const AccountModel = require('../models/account')

// connect to database
const options = {
    server: {
        ssl:        true,
        sslValidate:true,
        // sslCA:      ca,
        // ca:         ca,
        // sslKey:     key,
        // sslCert:    key
    }
};
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
);
const database = mongoose.connection;
database.on('error', (error) => console.error(error));
database.once('open', () => console.log('Connected to database'));



router.get('/', (req, res) => {
    res.send('We are on home');
}
);

// get all transactions
router.get('/transactions', async (req,res)=>{
    try{
        const data = await TransactionModel.find().sort({ date: -1 });
        let result = data.map((item)=> ({
            "title":item["title"],
            "amount":item["amount"],
            "date":item["date"].toDateString(),
            "type":item["type"],
            "remarks":item["remarks"]
        }))

        console.log(data);
        res.send(result);
    }
    catch(error){
        res.status(500).send({message:error.message});
    }
    
})

router.post('/transactions', async (req, res) => {
    // console.log(req.body);
    const data = new TransactionModel(req.body);

    try{
        const transaction = await data.save();
        res.status(201).send(transaction);
    }
    catch(error){
        res.status(400).send({message:error.message});
    }
    
}
);

router.get('/accounts', async (req,res)=>{
    try{
        let data = await AccountModel.find();

        let result = {"savings":[],"current":[]};
        let total_balance = 0;
        data.forEach((item)=>{
            total_balance += item["balance"];
            if(item["account_type"]==="savings"){
                result["savings"].push(item);
            }
            else{
                result["current"].push(item);
            }
        })
        result["total_balance"] = total_balance;
        res.send(result);
    }
    catch(error){
        res.status(500).send({message:error.message});
    }
    
})

router.post('/accounts', async (req, res) => {
    // console.log(req.body);
    const data = new AccountModel(req.body);

    try{
        const account = await data.save();
        res.status(201).send(account);
    }
    catch(error){
        res.status(400).send({message:error.message});
    }
});


module.exports = router;