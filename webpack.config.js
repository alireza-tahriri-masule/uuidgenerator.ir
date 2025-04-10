const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "scripts/version-4.js",
    path: path.resolve(__dirname, "src"),
  },
  mode: "production",
};
