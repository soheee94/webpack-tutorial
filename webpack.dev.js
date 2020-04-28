const merge = require("webpack-merge");
const common = require("./webpack.common");
// lint는 개발환경에서만 사용되므로 개발 파일에 적용시켜 준다.
const StyleLintPlugin = require("stylelint-webpack-plugin");

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
  },
  plugins: [new StyleLintPlugin()]
};

module.exports = merge(common, config);
