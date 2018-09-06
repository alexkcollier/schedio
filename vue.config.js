const path = require('path')

module.exports = {
  productionSourceMap: false,
  lintOnSave: true,
  pluginOptions: {
    stylelint: {
      formatter: () => require('prettier')
    },
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, 'src/assets/styles/variables.scss')]
    }
  },
  css: {
    extract: false
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@@': path.resolve(__dirname)
      }
    }
  }
}
