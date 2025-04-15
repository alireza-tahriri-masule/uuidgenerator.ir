const path = require("path");

module.exports = {
  entry: "./assets/js/app.js",
  output: {
    filename: "version-3.js",
    path: path.resolve(__dirname, 'assets/js'),
  },
  mode: "production",
};
