const path = require('path')
const sharedConf = require('../shared-webpack-conf')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'postcss-loader',
      {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
        },
      },
      {
        loader: 'style-resources-loader',
        options: sharedConf.styleResourcesLoaderOptions,
      },
    ],
    include: [path.resolve(__dirname, '../../src'), path.resolve(__dirname, '../../docs')],
  })

  Object.assign(config.resolve.alias, sharedConf.aliases)
  config.parallelism = 1

  return config
}
