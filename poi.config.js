const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  entry: 'src/index',
  plugins: [
    {
      resolve: '@poi/plugin-typescript',
      options: {
        lintOnSave: false,
        babel: true,
      },
    },
  ],

  configureWebpack(config) {
    config.resolve.plugins = config.resolve.plugins || []
    config.resolve.plugins.unshift(
      new TsconfigPathsPlugin({configFile: __dirname + '/tsconfig.json'})
    )
  },
}
