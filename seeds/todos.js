
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'Mow the lawns', priority: '2',category: 'home', is_complete: false, due_at: 29/02/2018},
        {id: 2, task: 'Deliver quarterly report', priority: '4',category: 'work', is_complete: false, due_at: 04/03/2018},
        {id: 3, task: 'Replace golf balls', priority: '1',category: 'leisure', is_complete: true, due_at: 26/02/2018}
      ]);
    });
};
