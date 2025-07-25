const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: '[name].[contenthash].js', //브라우저 캐시 전략???
    path: path.resolve(__dirname, "dist"),
    clean: true, // dist 폴더 정리
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  cache: {
    type: 'filesystem', // 디스크에 캐시 저장
    buildDependencies: {
      config: [__filename], // 이 설정 파일이 바뀌면 캐시 무효화
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ForkTsCheckerWebpackPlugin()
  ],
  // devtool: "source-map",
  devServer: {
    static: "./dist",
    port: 3000,
  },
  mode: "development",
};