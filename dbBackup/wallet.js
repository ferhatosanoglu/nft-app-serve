
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('wallet').del()
    .then(function () {
      // Inserts seed entries
      return knex('wallet').insert([
        {
          userKey: 'a3l2kjb65ljk453',
          amount: 7
        },
        {
          userKey: 'a3l2kjb65ljk454',
          amount: 4
        },
        {
          userKey: 'a3l2kjb65ljk455',
          amount: 1
        }
      ]);
    });
};
