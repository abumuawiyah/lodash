const modules = {
  filter,
  find,
  map,
  each,
  pick,
  head,
  tail,
  toObject,
  compact,
  difference
};

function filter(arr, cb) {
  return arr.filter(cb);
}

function find(arr, cb) {
  return arr.find(cb);
}

function map(arr, cb) {
  return arr.map(cb);
}

function each(arr, cb) {
  return arr.forEach(cb);
}

function pick(obj, arr) {
  return arr
    .map(a => {
      return {
        [a]: obj[a]
      };
    })
    .reduce((a, b) => {
      return { ...a, ...b };
    });
}

function head(arr) {
  const [first] = arr;
  return first;
}

function tail(arr) {
  const [, ...tail] = arr;
  return tail;
}

function toObject(arr, key, value) {
  return arr.reduce((prev, next, idx) => {
    prev[key ? key(next) : idx] = value ? value(next) : next;
    return prev;
  }, {});
}

function compact(arr) {
  return arr.filter(Boolean);
}

function difference(arr) {
  return arr.reduce((a, b) => a.filter(c => !b.includes(c)));
}

export default modules;
