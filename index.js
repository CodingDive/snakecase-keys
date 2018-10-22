"use strict";

const map = require("map-obj");

module.exports = function(obj, options = { deep: true }) {
  return map(
    obj,
    (key, val) => {
      // respects whole words being uppercase e.g turns clientID into client_id
      // instead of client_i_d. See https://stackoverflow.com/a/30521308.
      console.log("Key that needs to be snake cased: " + key);
      let snakeCasedKey = key
        .replace(/\.?([A-Z]+)/g, (x, y) => {
          return "_" + y.toLowerCase();
        })
        .replace(/^_/, "");

      // if key didn't include two underscores, there should be no two
      // underscores after snakeCasing it. This respects the UPPER_CASE
      // format, turning FOO_BAR into foo_bar.
      if (!key.includes("__")) {
        snakeCasedKey = snakeCasedKey.replace(/__/g, "_");
      }

      return [snakeCasedKey, val];
    },
    options
  );
};
