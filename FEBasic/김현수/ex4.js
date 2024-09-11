const { isMap, isSet, isWeakMap, isWeakSet } = require("util/types");

function isObject(obj) {
  return obj && typeof obj === "object";
}

function deepCopy(obj) {
  if (!isObject(obj)) {
    return obj;
  }
  if (Array.isArray(obj)) {
    const arr = [];
    for (a in obj) {
      arr.push(deepCopy(obj[a]));
    }
    return arr;
  }
  if (isMap(obj)) {
    const map = new Map();
    for (const [key, value] of obj) {
      const deepKey = deepCopy(key);
      const deepValue = deepCopy(value);
      map.set(deepKey, deepValue);
    }
    return map;
  }
  if (isWeakMap(obj)) {
    const copy = new WeakMap();
    obj.set((value, key) => {
      if (typeof key === "object" && key !== null) {
        const deepValue = deepCopy(value);
        copy.set(key, deepValue);
      }
    });
    return copy;
  }
  //   if (isMap(obj)) return obj;
  //   if (isWeakMap(obj)) return obj;
  if (isSet(obj)) return obj;
  if (isWeakSet(obj)) return obj;

  const newer = {};
  for (const k of Reflect.ownKeys(obj)) {
    newer[k] = deepCopy(obj[k]);
  }

  return newer;
}

module.exports = { deepCopy };
