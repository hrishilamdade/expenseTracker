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

app.listen(process.env.BACKEND_PORT,()=>  console.log('Backend server started listening on http://localhost:'+process.env.BACKEND_PORT ));
