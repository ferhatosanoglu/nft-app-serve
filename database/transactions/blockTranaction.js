const db = require("../db-config")
var crypto = require('crypto');

module.exports = {
    list, buyProduct
}

function list() {
    return db('block');
}

async function buyProduct(buyerKey, block) {
    const newBlock = {};
    newBlock.buyerKey = buyerKey.userKey;
    newBlock.sellerKey = block.userKey;
    newBlock.productPrice = block.productPrice;
    newBlock.productName = block.productName;
    newBlock.transactionDate = new Date();
    newBlock.blockKey = crypto.createHash('md5').update(newBlock.buyerKey + newBlock.sellerKey + newBlock.productPrice + newBlock.productName + newBlock.transactionDate).digest('hex');

    //add product for buyyer user and money
    const product = {};
    product.userKey = buyerKey.userKey;
    product.productName = block.productName;
    db('portfolio').insert(product, "userKey");
    const wallet = await db('wallet').where({ 'userKey': buyerKey.userKey }).then((data) => {
        if (data) {
            return db('wallet').where({ 'userKey': buyerKey.userKey }).first();
        }
    });

    wallet.amount = wallet.amount - block.productPrice;;

    db('wallet')
        .update(wallet)
        .where({ 'userKey': buyerKey.userKey })
        .then(updated => {
            if (updated) {
                return db('wallet').where({ 'userKey': buyerKey.userKey }).first();
            }
        })


    //delete product for seller user and money

    db('portfolio').del().where({ 'userKey': block.userKey, 'productName': block.productName });

    const sellerWallet = await db('wallet').where({ 'userKey': block.userKey }).then((data) => {
        if (data) {
            return db('wallet').where({ 'userKey': block.userKey }).first();
        }
    });
    console.log(block.userKey);
    sellerWallet.amount = block.productPrice + sellerWallet.amount;


    db('wallet')
        .update(sellerWallet)
        .where({ 'userKey': block.userKey })
        .then(updated => {
            if (updated) {

                return db('wallet').where({ 'userKey': block.userKey }).first();
            }
        })


    //delete product for market
    db('market').del().where({ 'userKey': block.userKey, 'productName': block.productName });


    return db('block').insert(newBlock, "blockKey");

}