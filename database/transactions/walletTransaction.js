const res = require("express/lib/response");
const db = require("../db-config")
module.exports = {
    findWallet,
    updateWallet
}


function findWallet(userKey) {
    return db('wallet').where({ userKey }).then((data) => {
        if (data) {
            return db('wallet').where({ userKey }).first();
        }
    });
}


async function updateWallet(updateWallet, userKey) {
    const wallet = await db('wallet').where({ userKey }).then((data) => {
        if (data) {
            return db('wallet').where({ userKey }).first();
        }
    });

    if (wallet) {
        updateWallet.amount = updateWallet.amount + wallet.amount;
        return db('wallet')
            .update(updateWallet)
            .where({ userKey })
            .then(updated => {
                if (updated) {
                    return db('wallet').where({ userKey }).first();
                }
            })
    } else {

        const newWallet = {};
        newWallet.amount = updateWallet.amount;
        newWallet.userKey = userKey;
        return db('wallet').insert(newWallet, "userKey");
    }

}
