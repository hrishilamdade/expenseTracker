const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// initialize router
const router = express.Router();
// router.use();

router.get('/', (req, res) => {
    res.send('We are on home');
}
);

module.exports = router;