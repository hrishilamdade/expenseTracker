const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
// initialize router
const router = express.Router();

//Import models
const Model = require('../models/model')

// connect to database
mongoose.connect(process.env.DATABASE_URL);
const database = mongoose.connection;
database.on('error', (error) => console.error(error));
database.once('open', () => console.log('Connected to database'));



router.get('/', (req, res) => {
    res.send('We are on home');
}
);

router.get('/transactions', async (req,res)=>{
    try{
        const data = await Model.find();
        res.send(data);
    }
    catch(error){
        res.status(500).send({message:error.message});
    }
    
})

router.post('/transactions', async (req, res) => {
    // console.log(req.body);
    const data = new Model(req.body);

    try{
        const transaction = await data.save();
        res.status(201).send(transaction);
    }
    catch(error){
        res.status(400).send({message:error.message});
    }
    
}
);


module.exports = router;