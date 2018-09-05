"use strict";

var test = require("tape");
var Snake = require("./");

test(function(t) {
  t.deepEqual(Snake({ fooBar: "baz", nested: { fooBar: "baz" } }), {
    foo_bar: "baz",
    nested: { foo_bar: "baz" }
  });
  t.end();
});

test("Respects whole words", t => {
  t.deepEqual(Snake({ fooBAR: "bazBAR", nested: { fooBAR: "bazID" } }), {
    foo_bar: "bazBAR",
    nested: { foo_bar: "bazID" }
  });
  t.end();
});

test("shallow conversion with {deep: false}", function(t) {
  t.deepEqual(Snake({ fooBar: { barBaz: "qux" } }, { deep: false }), {
    foo_bar: { barBaz: "qux" }
  });
  t.end();
});
