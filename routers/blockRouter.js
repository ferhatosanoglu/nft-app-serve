const express = require('express');
const router = express.Router();

const blockTransaction = require('../database/transactions/blockTranaction')

router.get('/block', (req, res, next) => {
    blockTransaction.list().then(block => {
        res.status(200).json(block);
    }).catch(error => {
        next({ statusCode: 500, errorMessage: 'sunucu hatasi', error });
    })
});

router.post('/block/:userKey', (req, res, next) => {
    const buyerKey = req.params;
    const block = req.body;
    blockTransaction.buyProduct(buyerKey, block).then(added => {
        res.status(201).json(added);
    }).catch(error => {
        next({
            statusCode: 500,
            errorMessage: 'islem gerceklstirilemedi, sunucu hatasi',
            error,
        })
    })
})
module.exports = router;