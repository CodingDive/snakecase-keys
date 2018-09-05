"use strict";

var map = require("map-obj");

module.exports = function(obj, options) {
  options = Object.assign({ deep: true }, options);

  return map(
    obj,
    (key, val) => {
      // respects whole words being uppercase e.g turns clientID into client_id
      // instead of client_i_d. See https://stackoverflow.com/a/30521308
      const snakeCasedKey = key
        .replace(/\.?([A-Z]+)/g, (x, y) => {
          return "_" + y.toLowerCase();
        })
        .replace(/^_/, "");
      return [snakeCasedKey, val];
    },
    options
  );
};
