const db = require("../db-config")
module.exports = {
    list, addProduct
}

function list() {
    return db('market');
}

function addProduct(product) {
    return db('market').insert(product, "userKey")
}