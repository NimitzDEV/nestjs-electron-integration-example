const path = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/renderer/app.ts'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist/renderer'),
  },
  plugins: [
    new copyWebpackPlugin({ patterns: [path.resolve(__dirname, 'src/renderer/index.html')] }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.renderer.json',
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
};
