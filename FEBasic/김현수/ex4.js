const { isMap, isSet, isWeakMap, isWeakSet } = require("util/types");

function isObject(obj) {
  return obj && typeof obj === "object";
}

function deepCopy(obj, weakMapCache = new WeakMap()) {
  if (!isObject(obj)) {
    return obj;
  }
  if (weakMapCache.has(obj)) {
    return weakMapCache.get(obj);
  }

  if (Array.isArray(obj)) {
    const arr = [];
    for (const a in obj) {
      arr.push(deepCopy(obj[a], weakMapCache));
    }
    return arr;
  }

  if (isMap(obj)) {
    const map = new Map();
    for (const [key, value] of obj) {
      const deepKey = deepCopy(key, weakMapCache);
      const deepValue = deepCopy(value, weakMapCache);
      map.set(deepKey, deepValue);
    }
    return map;
  }

  if (isWeakMap(obj)) {
    const weakMapCopy = new WeakMap();
    weakMapCache.set(obj, weakMapCopy);
    return weakMapCopy;
  }

  if (isSet(obj)) {
    const set = new Set();
    for (const value of obj) {
      set.add(deepCopy(value, weakMapCache));
    }
    return set;
  }

  if (isWeakSet(obj)) {
    weakMapCache.set(obj, obj);
    return obj;
  }

  const newer = {};
  weakMapCache.set(obj, newer);

  for (const k of Reflect.ownKeys(obj)) {
    newer[k] = deepCopy(obj[k], weakMapCache);
  }

  return newer;
}

module.exports = { deepCopy };
