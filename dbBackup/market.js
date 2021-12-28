exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('market').del()
    .then(function () {
      // Inserts seed entries
      return knex('market').insert([
        {
          userKey: 'a3l2kjb65ljk453',
          productName: 'tweet 1',
          productPrice: 123
        },
        {
          userKey: 'a3l2kjb65ljk454',
          productName: 'tweet 2',
          productPrice: 124
        },
        {
          userKey: 'a3l2kjb65ljk455',
          productName: 'tweet 3',
          productPrice: 125
        }
      ]);
    });
};