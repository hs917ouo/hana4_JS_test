function listToArray(list) {
  const arr = [];
  let current = list;

  while (current !== undefined) {
    arr.push(current.value);
    current = current.rest;
  }

  return arr;
}
function arrayToList(arr) {
  let list = undefined;

  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], ...(list && { rest: list }) };
  }
  return list;
}
