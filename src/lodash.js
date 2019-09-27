const modules = {
  filter,
  find,
  map,
  each,
  pick,
  head,
  tail
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

export default modules;
