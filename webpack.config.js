const path = require('path')
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
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
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
      { test: /\.(png|gif|jpe?g|webp)$/, type: 'asset' }
    ]
  },
  /**
   * plugins
   */
  plugins: [
    //   plugins config
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
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
    client: {
      logging: 'info',
      overlay: true
    },
    compress: true,
    host: '0.0.0.0' // 允許本地網路下設備進行訪問
  },
  stats: 'errors-only'
}
