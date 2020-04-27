// __dirname, path module

const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader", options: { injectType: "singletoneStyleTag" } },
          {
            loader: "css-loader",
            options: {
              // javascript 내에서 불러와서 사용할 수 있음
              modules: true
            }
          }
        ]
      }
    ]
  },
  mode: "none",
  target: "node"
};
