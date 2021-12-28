exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('block').del()
    .then(function () {
      // Inserts seed entries
      return knex('block').insert([
        {
          sellerKey: 'a3l2kjb65ljk453',
          productName: 'tweet 1',
          productPrice: 123,
          buyerKey: 'a3l2kjb65ljk455',
          transactionDate: '12.03.2001',
          blockKey: 'b2l2kjb65ljk454'
        },
        {
          sellerKey: 'a3l2kjb65ljk454',
          productName: 'tweet 2',
          productPrice: 124,
          buyerKey: 'a3l2kjb65ljk453',
          transactionDate: '12.03.2001',
          blockKey: 'c2l2kjb65ljk454'
        },
        {
          sellerKey: 'a3l2kjb65ljk455',
          productName: 'tweet 3',
          productPrice: 125,
          buyerKey: 'a3l2kjb65ljk454',
          transactionDate: '12.03.2001',
          blockKey: 'd2l2kjb65ljk454'
        }
      ]);
    });
};