const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "scripts/version-4.js",
    path: path.resolve(__dirname),
  },
  mode: "production",
};
