const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    /**
     * 所有檔案輸出路徑
     */
    path: undefined,
    filename: 'static/js/main.js',
    clean: true // 清除舊檔案
  },
  /**
   * loader
   */
  module: {
    rules: [
      //     loader config
      // 匹配.css文件，use 執行順序由右到左、由下到上
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.styl$/, use: ['style-loader', 'css-loader', 'stylus-loader'] },
      {
        test: /\.(png|gif|jpe?g|webp)$/,
        type: 'asset',
        parser: { dataUrlCondition: { maxSize: 200 * 1024 } },
        generator: {
          // 将图片文件输出到 static/imgs 目录中
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名
          // [query]: 添加之前的query参数
          filename: 'static/imgs/[hash:8][ext][query]'
        }
      },
      {
        test: /\.(ttf|woff2?|mp3|mp4)$/,
        type: 'asset/resource',
        generator: {
          // 命名 [hash:8][ext][query]
          filename: 'static/media/[hash:8][ext][query]'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除 node_modules 目錄
        use: {
          loader: 'babel-loader'
          // options: {
          //   presets: ['@babel/preset-env']
          // 移出，寫在 babel.config.js
          // }
        }
      }
    ]
  },
  /**
   * plugins
   */
  plugins: [
    //   plugins config
    new ESLintPlugin({
      // 檢查檔案位置
      context: path.resolve(__dirname, '../src')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html'
    })
  ],
  /**
   * mode
   */
  mode: 'development',
  // mode: 'production',
  devServer: {
    port: 8080,
    open: true,
    hot: true, // 開啟 HMR 支持
    client: {
      logging: 'info',
      overlay: true
    },
    compress: true,
    host: '0.0.0.0' // 允許本地網路下設備進行訪問
  },
  stats: 'errors-only'
}
