const path = require('path');

module.exports = [
  {
    entry: './scripts/product-list.js',  // Adjust the entry point as needed
    output: {
      filename: 'product-list.js',
      path: path.resolve(__dirname, 'blocks', 'product-list'),
      library: {
        type: 'module',  // Output as an ES module
      }
    },
    experiments: {
      outputModule: true,  // Enable module output
    },
    devtool: false,
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  }
];
