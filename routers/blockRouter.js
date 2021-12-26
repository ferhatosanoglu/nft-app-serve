const express = require('express');
const router = express.Router();

router.get('/block', (req, res) => {
    res.status(200).json({
        message: 'get block'
    });
});
module.exports = router;