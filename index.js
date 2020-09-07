import { join } from 'path'
import _kebabCase from 'lodash/kebabcase'

module.exports = function nuxtElementUiModule(moduleOptions) {
  const options = Object.assign({}, this.options.elementUI || moduleOptions)
  options.components = (options.components || []).map(className => ({
    className,
    fileName: _kebabCase(className)
  }))

  this.addTemplate({
    src: join(__dirname, 'template.scss'),
    fileName: join('element-ui', 'index.scss'),
    options
  })

  if (!options.locale) options.locale = 'en'
  if (!options.i18n) options.i18n = false
  this.addPlugin({ src: join(__dirname, 'template.js'), fileName: join('element-ui', 'index.js'), options })
}

module.exports.meta = require('./package.json')
