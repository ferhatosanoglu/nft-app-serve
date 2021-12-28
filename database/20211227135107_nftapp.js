
exports.up = function (knex) {
    return knex.schema.createTable('users', (tbl) => {
        tbl.string('userKey').notNullable();
        tbl.string('userName').notNullable();
        tbl.string('userPassword').notNullable();
    }).createTable('portfolio', (tbl) => {
        tbl.string('userKey').notNullable();
        tbl.string('productName').notNullable();
    }).createTable('wallet', (tbl) => {
        tbl.string('userKey').notNullable();
        tbl.integer('amount').notNullable();
    }).createTable('market', (tbl) => {
        tbl.integer('productPrice').notNullable();
        tbl.string('productName').notNullable();
        tbl.string('userKey').notNullable();
    }).createTable('block', (tbl) => {
        tbl.integer('productPrice').notNullable();
        tbl.string('productName').notNullable();
        tbl.string('buyerKey').notNullable();
        tbl.string('sellerKey').notNullable();
        tbl.string('transactionDate').notNullable();
        tbl.string('blockKey').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("block").dropTableIfExists('market').dropTableIfExists('wallet').dropTableIfExists('portfolio').dropTableIfExists('users');
};
