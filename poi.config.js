const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  entry: 'src/index',
  plugins: [
    {
      resolve: '@poi/plugin-typescript',
      options: {
        lintOnSave: false,
        babel: false,
      },
    },
  ],

  configureWebpack(config) {
    config.resolve.plugins = config.resolve.plugins || []
    config.resolve.plugins.unshift(
      new TsconfigPathsPlugin({configFile: __dirname + '/tsconfig.json'})
    )
    // config.resolve.alias['easy-peasy'] = require.resolve('easy-peasy/src/index.js')
  },

  babel: {
    transpileModules: [
      // /easy-peasy/
    ],
  },
}
