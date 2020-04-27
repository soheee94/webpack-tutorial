const merge = require("webpack-merge");
const common = require("./webpack.common");

const config = {
  mode: "development",
  devServer: {
    // new open tab
    open: false,
    // error 가 브라우저 화면에 나타남
    overlay: true,
    // 라우팅 예외처리 (SPA 사용하는 경우)
    historyApiFallback: {
      rewrites: [
        { from: /^\/subpage$/, to: "subpage.html" },
        { from: /./, to: "404.html" }
      ]
    },
    port: 3333
  }
};

module.exports = merge(common, config);
