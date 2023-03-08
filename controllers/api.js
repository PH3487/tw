const express = require('express');
const router = express.Router();

// post login
router.post('/login', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Login success'
    })
});

module.exports = router;