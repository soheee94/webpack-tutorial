// __dirname, path module

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
          // css-loader는 css 파일들을 읽어주고
          // style-loader는 읽은 css 파일들을 style 태그로 만들어 head 태그 안에 넣어줍니다.
          { loader: "style-loader", options: { injectType: "singletonStyleTag" } },
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./template.html"
    })
  ],
  mode: "none",
  target: "node"
};
