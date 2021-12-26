const express = require('express');
const router = express.Router();

router.get('/user', (req, res, next) => {
    res.status(200).json({
        message: 'get user'
    });
    //hata
    // next({ statusCode: 400, error: 'user bulunamadi' });
});
module.exports = router;