const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors');
require('dotenv').config();

const app = express();


// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', routes);


// Connect to DB
// mongoose.connect(
//     process.env.DB_CONNECTION,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => console.log('Connected to DB!')
// );

// How to we start listening to the server
console.log(process.env.APP_NAME)
console.log(process.env.DATABASE_URL)
app.listen(process.env.BACKEND_PORT,()=>  console.log('Backend server started listening on http://localhost:'+process.env.BACKEND_PORT ));
