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
mongoose.connect(process.env.DATABASE_URL);
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
        let data = await TransactionModel.find();
        // const result = data.map((item)=> ({
        //     ...data, "date":item["date"].toDateString()
        // }))
        // console.log(result);
        res.send(data);
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
        res.send(data);
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