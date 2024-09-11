const assert = require("assert");
const { deepCopy } = require("./ex4");

const arr = [1, 2, 3];
const hong = { id: 1, name: "Hong", city: "Busan", dept: 1 };

const kim = {
  nid: 3,
  addr: "Pusan",
  arr: [1, 2, 3, { aid: 1 }, [10, 20]],
  oo: { id: 1, name: "Hong", addr: { city: "Seoul" } },
  xx: null,
  yy: function () {
    console.log(this.oo);
  },
  yyy() {
    console.log(this.oo);
  },
  [Symbol()]: 9,
  [Symbol()]: Symbol("symbol2"),
  zs: new Set([arr, hong]),
  zws: new WeakSet([arr, hong]),
  zm: new Map([[hong, arr]]),
  zwm: new WeakMap([[hong, arr]]),
};
const newKim = deepCopy(kim);
assert.deepStrictEqual(newKim, kim, "deepCopy equal fail!");
newKim.addr = "Daegu";
newKim.oo.name = "Kim";
assert.notDeepStrictEqual(newKim, kim, "Not Valid Deep Copy!");
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = "Daejeon";
assert.notStrictEqual(kim.arr[4][1], newKim.arr[4][1], "pass2: 다르지 않아요!");
assert.notStrictEqual(
  kim.oo.addr.city,
  newKim.oo.addr.city,
  "Not Pass3: city가 다르지 않아요!"
);
const obj1 = { a: 1 };
newKim.zm.set("key", "value");
assert.notDeepStrictEqual(newKim.zm, kim.zm);

newKim.zwm.set(obj1, "value");
console.log(kim.zwm);
assert.notDeepStrictEqual(newKim.zwm, kim.zwm);

const map = new Map();
const set = new Set();
const weakMap = new WeakMap();
const weakSet = new WeakSet();

console.log(map);

const obj2 = { b: 2 };

map.set("key1", obj1);
set.add(obj2);
weakMap.set(obj1, obj2);
weakSet.add(obj1);

console.log(map);

const deepCopiedMap = deepCopy(map);

console.log(deepCopiedMap);
deepCopiedMap.set("key1", obj2);
const deepCopiedSet = deepCopy(set);
const deepCopiedWeakMap = deepCopy(weakMap);
const deepCopiedWeakSet = deepCopy(weakSet);

assert.notStrictEqual(map, deepCopiedMap);
assert.deepStrictEqual(set, deepCopiedSet);
// assert.deepStrictEqual(weakMap, deepCopiedWeakMap);
// assert.deepStrictEqual(weakSet, deepCopiedWeakSet);
