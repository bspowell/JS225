function objectsEqual(arg1, arg2) {
  if (Object.keys(arg1).length !== Object.keys(arg2).length) return false;

  for (let prop of Object.keys(arg1)) {
    if (!arg2.hasOwnProperty(prop)) return false;
    if (arg1[prop] !== arg2[prop]) return false;
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false