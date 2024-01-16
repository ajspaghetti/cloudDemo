const { override, addWebpackModuleRule, addWebpackPlugin } = require('customize-cra');
const webpack = require('webpack');

module.exports = override(
  (config) => {
    config.resolve.fallback = {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util'),
      buffer: require.resolve('buffer'),
    };

    config.plugins = (config.plugins || []).concat([
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ]);

    return config;
  },

  addWebpackModuleRule({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }),

  addWebpackModuleRule({
    test: /\.png$/,
    use: ['file-loader'],
  }),

  addWebpackModuleRule({
    test: /\.jpe?g$/,
    use: ['file-loader'],
  })
);
