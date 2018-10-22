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

test("Respects UPPER_CASE constant format", t => {
  t.deepEqual(Snake({ FOO_BAR: "bazBAR", nested: { FOO_BAR: "bazID" } }), {
    foo_bar: "bazBAR",
    nested: { foo_bar: "bazID" }
  });
  t.end();
});

test("Respects UPPER_CASE constant format of long constant names", t => {
  t.deepEqual(
    Snake({ FOO_BAR_BAZ_QUX: "bazBAR", nested: { FOO_BAR_BAZ_QUX: "bazID" } }),
    {
      foo_bar_baz_qux: "bazBAR",
      nested: { foo_bar_baz_qux: "bazID" }
    }
  );
  t.end();
});

test("Doesn't add an underscore before a number", t => {
  t.deepEqual(Snake({ fooBar1: "bazBar1", nested: { fooBar1: "bazId1" } }), {
    foo_bar1: "bazBar1",
    nested: { foo_bar1: "bazId1" }
  });
  t.end();
});

test("Doesn't add an underscore before number after whole word", t => {
  t.deepEqual(Snake({ fooBAR1: "bazBAR1", nested: { fooBAR1: "bazID1" } }), {
    foo_bar1: "bazBAR1",
    nested: { foo_bar1: "bazID1" }
  });
  t.end();
});

test("shallow conversion with {deep: false}", function(t) {
  t.deepEqual(Snake({ fooBar: { barBaz: "qux" } }, { deep: false }), {
    foo_bar: { barBaz: "qux" }
  });
  t.end();
});
