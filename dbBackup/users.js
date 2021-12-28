
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          userKey: 'a3l2kjb65ljk453',
          userName: 'rowValue1',
          userPassword: '1asd2'
        },
        {
          userKey: 'a3l2kjb65ljk454',
          userName: 'rowValue2',
          userPassword: '1asd2'
        },
        {
          userKey: 'a3l2kjb65ljk455',
          userName: 'rowValue3',
          userPassword: '1asd2'
        }
      ]);
    });
};
