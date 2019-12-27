let cascade_localecompare = (a, b) => {
  let common_len = Math.min(a.length, b.length);
  for(let i=0; i<common_len; i++) {
    if (a[i] === b[i]) {
      continue;
    }
    let r = a[i].localeCompare(b[i]);
    if (r !== 0) {
      return r;
    } else if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
  }
  return a.length - b.length;
}

let sort_by = (data, fn) => (
  data.map((x, i) => [fn(x), i, x])
    .sort((a,b) => cascade_localecompare(a[0], b[0]))
    .map((row) => row[2])
)

let pad_with_nines = (m) => (
  Array.from({length: m.length}).join("9") + "0" + m
)

// Replace 123 with 9990123
// This makes all numbers sort properly
let force_numbers_into_order = (str) => (
  str.replace(/\d+/g, pad_with_nines)
)

let separate_extensions = (ary) => {
  let result = [];
  for (part of ary) {
    let i = part.indexOf(".");
    if (i === -1) {
      result.push(part);
      result.push("");
    } else {
      result.push(part.substr(0, i));
      result.push(part.substr(i));
    }
  }
  return result;
}

let finder_key = (str) => (
  separate_extensions(force_numbers_into_order(str).split("/"))
)

let finder_sort = (data, key_func) => {
  if (key_func) {
    return sort_by(data, (x) => finder_key(key_func(x)))
  } else {
    return sort_by(data, finder_key)
  }
}

module.exports = finder_sort;
