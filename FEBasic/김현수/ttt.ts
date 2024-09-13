type ListNode<T> = {
  value: T;
  rest?: ListNode<T>;
};

function listToArray<T>(list: ListNode<T> | undefined): T[] {
  const arr: T[] = [];
  let current: ListNode<T> | undefined = list;

  while (current !== undefined) {
    arr.push(current.value);
    current = current.rest;
  }

  return arr;
}

function arrayToList<T>(arr: T[]): ListNode<T> | undefined {
  let list: ListNode<T> | undefined = undefined;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (list === undefined) {
      list = { value: arr[i] };
    } else {
      list = { value: arr[i], rest: list };
    }
  }

  return list;
}

// 테스트 예시
const li: ListNode<number> = {
  value: 1,
  rest: { value: 2, rest: { value: 3 } },
};
console.log(listToArray(li)); // [1, 2, 3]

const strList = arrayToList(["a", "b", "c"]);
console.log(strList);
// { value: "a", rest: { value: "b", rest: { value: "c" } } }
