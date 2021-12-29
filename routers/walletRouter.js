const express = require('express');
const router = express.Router();
const walletTransaction = require('../database/transactions/walletTransaction');

router.get('/wallet/:userKey', (req, res, next) => {
    const { userKey } = req.params;
    walletTransaction.findWallet(userKey).then(data => {
        res.status(200).json(data);
    }).catch(error => {
        next({ statusCode: 500, errorMessage: 'sunucu hatasi', error });
    })
});

router.patch('/wallet/:userKey', (req, res, next) => {
    const { userKey } = req.params;
    const updateWallet = req.body;

    walletTransaction.updateWallet(updateWallet, userKey).then(updated => {
        res.status(200).json(updated);
    }).catch((error) => {
        next({
            statusCode: 500,
            errorMessage: "cuzdan duzenlenirken hata olustu.",
            error
        })
    })
});



module.exports = router;