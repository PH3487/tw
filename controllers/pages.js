const express = require('express');
const router = express.Router();
const handlerLoop = require('./../handlerLoop.json');
const topup = require('./../topup.json');
// get /
router.get('/', (req, res) => {
    res.render('index', { handlerLoop: handlerLoop.errors, topup: topup.topup });
});

module.exports = router;