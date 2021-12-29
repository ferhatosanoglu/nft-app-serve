const res = require("express/lib/response");
const db = require("../db-config")
module.exports = {
    findPortfolio
}


function findPortfolio(userKey) {
    return db('portfolio').where({ userKey }).then((data) => {
        if (data) {
            return db('portfolio').where({ userKey }).first();
        }
    });
}