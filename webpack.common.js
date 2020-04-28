// __dirname, path module

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const isProduction = process.env.NODE_ENV === "PRODUCTION";
const postcssLoader = {
  loader: "postcss-loader",
  options: {
    config: {
      path: "postcss.config.js"
    }
  }
};

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js" //hash, contenthash, chunkhash
  },
  module: {
    // filenmae.moudle.scss => css modules, //filename.scss => global
    rules: [
      {
        test: /\.s?css$/,
        // 조건 걸어주기
        oneOf: [
          {
            test: /\.module\.s?css$/,
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
              },
              postcssLoader,
              "sass-loader"
            ]
          },
          {
            use: [MiniCssExtractPlugin.loader, "css-loader", postcssLoader, "sass-loader"]
          }
        ]
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name() {
                if (!isProduction) {
                  return "[path][name].[ext]";
                }
                return "[contenthash].[ext]";
              },
              publicPath: "assets/",
              outputPath: "assets/"
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // 파일크기 제한(~8kb)
              limit: 8192
            }
          }
        ]
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
      },
      minify: isProduction
        ? {
            collapseWhitespace: true,
            useShortDoctype: true,
            removeScriptTypeAttributes: true
          }
        : false
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      IS_PRODUCTION: isProduction
    })
  ],
  mode: "none",
  target: "node"
};
