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

let finder_key = (str) => (
  force_numbers_into_order(str).split("/")
)

let finder_sort = (paths) => (
  sort_by(paths, finder_key)
)

module.exports = finder_sort;
