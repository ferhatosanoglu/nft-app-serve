const express = require('express');
const router = express.Router();

router.get('/wallet', (req, res) => {
    res.status(200).json({
        message: 'get user'
    });
});
module.exports = router;