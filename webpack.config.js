const path = require('path');

module.exports  = {
//   入口
entry: './src/main.js',
//   輸出
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'main.js'
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
mode: 'development'
}
