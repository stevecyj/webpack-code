const path = require('path');

module.exports = {
  //   入口(相對路徑 )
  entry: './src/main.js',
  //   輸出
  output: {
    // 輸出路徑(絕對)
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  //   loader
  module: {
    rules: [
      //     loader config
    ],
  },
  //   plugins
  plugins: [
    //   plugins config
  ],
  //   mode
  mode: 'development',
  // mode: 'production',
};
