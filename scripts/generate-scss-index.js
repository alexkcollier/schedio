const fs = require('fs-extra')
const path = require('path')

module.exports = function generateScssIndex(componentNames) {
  const importList = componentNames
    .filter(name =>
      fs.existsSync(path.resolve(__dirname, `../src/components/${name}/${name}.scss`))
    )
    .map(name => `@import './components/${name}/${name}.scss';`)
    .join('\n')

  const template = `\
/**
 * THIS FILE IS AUTOMATICALLY GENERATED
 * DO NOT UPDATE IT DIRECTLY
 */

${importList}
`

  fs.outputFileSync(path.resolve(__dirname, '../src/components.scss'), template)
}