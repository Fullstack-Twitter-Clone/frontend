const path = require('path')

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, './public'), // update output path to dist folder
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, './src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, './src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        },
      },
        exclude: /node_modules/,
      },
    ],
  },
}
