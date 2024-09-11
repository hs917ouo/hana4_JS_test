import assert from 'assert';
import { promiseAllSettled, randTime } from './ex6';

(async function testNormal() {
  assert.deepStrictEqual(
    await promiseAllSettled([randTime(1), randTime(2), randTime(3)]),
    await Promise.allSettled([randTime(1), randTime(2), randTime(3)])
  );
})();

(async function testWithReject() {
  assert.deepStrictEqual(
    await promiseAllSettled([
      randTime(11),
      Promise.reject('REJECT'),
      randTime(33),
    ]),
    await Promise.allSettled([
      randTime(11),
      Promise.reject('REJECT'),
      randTime(33),
    ])
  );
})();
