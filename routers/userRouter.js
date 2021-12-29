const express = require('express');
var crypto = require('crypto');
const router = express.Router();
const userTransaction = require('../database/transactions/userTransaction');

router.post('/login', (req, res, next) => {
    const user = req.body;
    userTransaction.loginUser(user.userName, user.userPassword).then(data => {
        if (data) {
            res.status(200).json(data);
        } else {
            next({
                statusCode: 401,
                errorMessage: 'hatali kullanici adi veya password'
            })
        }
    }).catch(error => {
        next({ statusCode: 500, errorMessage: 'sunucu hatasi', error });
    })
});

router.post('/user', (req, res, next) => {
    const newUser = req.body;
    if (!newUser.userName || !newUser.userPassword) {
        next({
            statusCode: 400,
            errorMessage: 'lutfen bilgileri eksiksiz gonderin'
        })
    } else {
        newUser.userKey = crypto.createHash('md5').update(newUser.userName + newUser.userPassword).digest('hex');
        userTransaction.addUser(newUser).then(added => {
            res.status(201).json(added);
        }).catch(error => {
            next({
                statusCode: 500,
                errorMessage: 'kullanici kayit edilemedi',
                error,
            })
        })
    }
})

module.exports = router;