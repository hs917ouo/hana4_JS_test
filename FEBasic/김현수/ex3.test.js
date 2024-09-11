const assert = require('assert');
require('./ex3');

const hong = { id: 1, name: 'Hong', city: 'Busan', dept: 1 };
const kim = { id: 2, name: 'Kim', city: 'Seoul', dept: 2 };
const lee = { id: 3, name: 'Lee', city: 'Daegu', dept: 2 };
const users = [lee, hong, kim];

assert.deepStrictEqual(users.sortBy('id'), [hong, kim, lee]);
assert.deepStrictEqual(users.sortBy('name:desc'), [lee, kim, hong]);
assert.deepStrictEqual(users.sortBy('dept:desc,city:asc'), [lee, kim, hong]);
assert.deepStrictEqual(users.sortBy('dept:desc,city:desc'), [kim, lee, hong]);
assert.deepStrictEqual(users.sortBy('name:desc,id:,dept:desc'), [
  lee,
  kim,
  hong,
]);
assert.deepStrictEqual(users.sortBy('dept:desc,id'), [kim, lee, hong]);
