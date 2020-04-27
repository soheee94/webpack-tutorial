// __dirname, path module

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js" //hash, contenthash, chunkhash
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // css-loader는 css 파일들을 읽어주고
          // style-loader는 읽은 css 파일들을 style 태그로 만들어 head 태그 안에 넣어줍니다.
          // { loader: "style-loader", options: { injectType: "singletonStyleTag" } },
          // style-loader와 하는 일이 비슷해서 충돌될 경우를 방지
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              // javascript 내에서 불러와서 사용할 수 있음
              modules: true
            }
          }
        ]
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      title: "Webpack",
      template: "./template.hbs",
      meta: {
        viewport: "width=device-width"
      }
    }),
    new CleanWebpackPlugin()
  ],
  mode: "none",
  target: "node",
  // 파일 최적화
  optimization: {
    runtimeChunk: {
      name: "runtime"
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "venders",
          chunks: "all"
        }
      }
    }
  }
};
