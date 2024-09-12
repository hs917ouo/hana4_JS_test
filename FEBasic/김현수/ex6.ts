export const randTime = <T>(val: T): Promise<T> =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000, val));

export function promiseAllSettled<T>(
  promises: Promise<T>[],
): Promise<
  ({ status: "fulfilled"; value: T } | { status: "rejected"; reason: any })[]
> {
  return new Promise((resolve) => {
    const results: (
      | { status: "fulfilled"; value: T }
      | { status: "rejected"; reason: any }
    )[] = [];
    let completedPromises = 0;

    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
        })
        .finally(() => {
          completedPromises += 1;
          if (completedPromises === promises.length) {
            resolve(results);
          }
        });
    });
  });
}
