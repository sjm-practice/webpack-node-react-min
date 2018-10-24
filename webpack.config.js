const path = require("path");

const outputDirectory = "dist";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, outputDirectory),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: `./${outputDirectory}`,
  },
};
