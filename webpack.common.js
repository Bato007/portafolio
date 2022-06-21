const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|js)x?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|jpg|png|gif|woff|woff2|eot|ttf|pdf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader',
        options: {
          outputPath: 'images',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './assets/favicon.png',
      templateContent:
        `
      <!DOCTYPE html>
      <html>
        <head><base href="/"></head>
        <meta charset="UTF-8">
        <title>Portafolio</title>
        <body>
          <div id="root"></div>
        </body>
      </html> `,
    }),
    new ESLintPlugin({
      extensions: ['jsx', 'tsx'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets', to: 'assets' },
      ],
    }),
  ],
}
