const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return [
    // Browser build (UMD)
    {
      name: 'browser',
      mode: isProduction ? 'production' : 'development',
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: isProduction ? '3pa-y.min.js' : '3pa-y.js',
        library: 'ThreePay',
        libraryTarget: 'umd',
        globalObject: 'this'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', {
                    targets: {
                      browsers: ['> 1%', 'last 2 versions', 'not dead']
                    },
                    modules: false
                  }]
                ]
              }
            }
          }
        ]
      },
      devtool: isProduction ? 'source-map' : 'eval-source-map'
    },
    // Node.js build (CommonJS)
    {
      name: 'node',
      mode: isProduction ? 'production' : 'development',
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
      },
      target: 'node',
      externals: {
        axios: 'axios'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', {
                    targets: {
                      node: '14'
                    }
                  }]
                ]
              }
            }
          }
        ]
      },
      devtool: isProduction ? 'source-map' : 'eval-source-map'
    }
  ];
};

