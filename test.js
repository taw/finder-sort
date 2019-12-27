import test from "ava";
import finderSort from ".";

// https://support.apple.com/kb/TA22935?locale=en_US
test("sorting in Finder order, returns new sorted array", t => {
  let data = Object.freeze(["aaa", "111", "zzz", "_zzz", "11 10", "1110", "a0"]);
  let sorted = ["_zzz", "11 10", "111", "1110", "a0", "aaa", "zzz"];
	t.deepEqual(sorted, finderSort(data));
});

test("sorting numbers", t => {
  let data = [];
  for (let i=0; i<=1000; i++) {
    data.push(`x${i}.txt`);
  }
  t.deepEqual(data, finderSort(data));
});

test("sorting multi-part paths", t => {
  let data = [
    "/a",
    "/a/b/c/1",
    "/a/B/c/3",
    "/A/b/c/2",
    "/A/B/c/4",
    "/x/y/z",
    "/x/y_/z",
    "/x/y0/z",
    "a",
  ];
  t.deepEqual(data, finderSort(data));
})

test('sorting objects with name key', (t) => {
	let data = [
		{ name: 'cat1.jpg', color: 'white' },
		{ name: 'cat11.jpg', color: 'brown' },
		{ name: 'cat9.jpg', color: 'pink' },
	];
  let expected = [
		{ name: 'cat1.jpg', color: 'white' },
		{ name: 'cat9.jpg', color: 'pink' },
		{ name: 'cat11.jpg', color: 'brown' },
  ];
	t.deepEqual(expected, finderSort(data, (x) => x.name));
});

test('extension is compared separately from basename', (t) => {
  let data = Object.freeze(["foo.png", "foo_bar.png", "foo.jpg", "foo_bar.jpg"]);
  let sorted = ["foo.jpg", "foo.png", "foo_bar.jpg", "foo_bar.png"];
	t.deepEqual(sorted, finderSort(data));
});
