const express = require('express');
const router = express.Router();

router.get('/market', (req, res) => {
    res.status(200).json({
        message: 'get market'
    });
});
module.exports = router;