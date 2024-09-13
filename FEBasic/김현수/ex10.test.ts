import assert from "assert";
import { ArrayList } from "./ex10";
console.log("🚀  ArrayList:", ArrayList);

const arrayList = new ArrayList<number>();
assert.strictEqual(arrayList.toString(), "Empty list");

arrayList.add(10);
assert.strictEqual(arrayList.toString(), "{ value: 10 }");

arrayList.add(20);
assert.strictEqual(arrayList.toString(), "{ value: 10, rest: { value: 20 } }");

arrayList.add(30);
assert.strictEqual(
  arrayList.toString(),
  "{ value: 10, rest: { value: 20, rest: { value: 30 } } }"
);

assert.strictEqual(arrayList.size(), 3);
assert.strictEqual(arrayList.get(0), 10);
assert.strictEqual(arrayList.get(5), undefined);

arrayList.set(0, 40);
assert.strictEqual(
  arrayList.toString(),
  "{ value: 40, rest: { value: 20, rest: { value: 30 } } }"
);
arrayList.set(5, 40);
assert.strictEqual(
  arrayList.toString(),
  "{ value: 40, rest: { value: 20, rest: { value: 30 } } }"
);

arrayList.add(50, 2);
arrayList.add(60, 9);
assert.strictEqual(
  arrayList.toString(),
  "{ value: 40, rest: { value: 20, rest: { value: 50, rest: { value: 30, rest: { value: 60 } } } } }"
);

assert.strictEqual(arrayList.indexOf(20), 1);
assert.strictEqual(arrayList.indexOf(10), -1);
assert.strictEqual(arrayList.contains(20), true);
assert.strictEqual(arrayList.contains(10), false);
assert.strictEqual(arrayList.size(), 5);

arrayList.remove(20);
assert.strictEqual(
  arrayList.toString(),
  "{ value: 40, rest: { value: 50, rest: { value: 30, rest: { value: 60 } } } }"
);
assert.strictEqual(arrayList.size(), 4);

arrayList.remove(100);
assert.strictEqual(
  arrayList.toString(),
  "{ value: 40, rest: { value: 50, rest: { value: 30, rest: { value: 60 } } } }"
);
assert.strictEqual(arrayList.size(), 4);

const iterator = arrayList.iterator();
assert.deepStrictEqual(iterator.next(), { value: 40, done: false });
assert.deepStrictEqual(iterator.next(), { value: 50, done: false });
assert.deepStrictEqual(iterator.next(), { value: 30, done: false });
assert.deepStrictEqual(iterator.next(), { value: 60, done: false });
assert.deepStrictEqual(iterator.next(), { value: undefined, done: true });
