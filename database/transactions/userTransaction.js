const db = require("../db-config")
module.exports = {
    loginUser,
    addUser
}


function loginUser(userName, userPassword) {
    return db('users').where({ userName, userPassword }).then((data) => {
        if (data) {
            return db('users').where({ userName, userPassword }).first();
        }
    });
}

function addUser(user) {
    return db('users').insert(user, "userKey")
}
