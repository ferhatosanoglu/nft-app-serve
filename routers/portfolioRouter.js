const express = require('express');
const router = express.Router();
const portfolioTransaction = require('../database/transactions/portfolioTransaction');

router.get('/portfolio/:userKey', (req, res, next) => {
    const { userKey } = req.params;
    portfolioTransaction.findPortfolio(userKey).then(data => {
        res.status(200).json(data);
    }).catch(error => {
        next({ statusCode: 500, errorMessage: 'sunucu hatasi', error });
    })
});





module.exports = router;