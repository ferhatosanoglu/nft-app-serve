const express = require('express');
const router = express.Router();
const marketTransaction = require('../database/transactions/marketTransaction');

router.get('/market', (req, res, next) => {
    marketTransaction.list().then(market => {
        res.status(200).json(market);
    }).catch(error => {
        next({ statusCode: 500, errorMessage: 'sunucu hatasi', error });
    })
});

router.post('/market', (req, res, next) => {
    const newProduct = req.body;
    if (!newProduct.productName || !newProduct.productPrice) {
        next({
            statusCode: 400,
            errorMessage: 'lutfen bilgileri eksiksiz gonderin'
        })
    } else {
        marketTransaction.addProduct(newProduct).then(added => {
            res.status(201).json(added);
        }).catch(error => {
            next({
                statusCode: 500,
                errorMessage: 'urun kayit edilemedi, sunucu hatasi',
                error,
            })
        })
    }
})


module.exports = router;