const path = require('path');

module.exports = {
  /**
   * 入口(相對路徑)
   */
  entry: './src/main.js',
  /**
   * 輸出路徑
   * __dirname: 當前目錄
   * path.resolve: 解析路徑()
   * filename: 輸出檔名
   */
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  /**
   * loader
   */
  module: {
    rules: [
      //     loader config
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  /**
   * plugins
   */
  plugins: [
    //   plugins config
  ],
  /**
   * mode
   */
  mode: 'development',
  // mode: 'production',
};
