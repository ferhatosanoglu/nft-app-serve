exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('portfolio').del()
    .then(function () {
      // Inserts seed entries
      return knex('portfolio').insert([
        {
          userKey: 'a3l2kjb65ljk453',
          productName: 'tweet 1'
        },
        {
          userKey: 'a3l2kjb65ljk454',
          productName: 'tweet 2'
        },
        {
          userKey: 'a3l2kjb65ljk455',
          productName: 'tweet 3'
        }
      ]);
    });
};