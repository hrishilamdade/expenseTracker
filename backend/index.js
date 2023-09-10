const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Import Routes

// Middlewares
app.use(cors());

app.use(bodyParser.json());

// Routes Middlewares
// app.use('/posts', postsRoute);

// Connect to DB
// mongoose.connect(
//     process.env.DB_CONNECTION,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => console.log('Connected to DB!')
// );

// How to we start listening to the server
app.listen(3000,()=>  console.log('Server Up and running'));
