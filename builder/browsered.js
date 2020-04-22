const path = require('path')
const { prod } = require('./factory/prod-browser');

prod(() => {}, {
    scriptEntry: path.resolve(__dirname, 'factory/templates/browsered.js'),
    scriptOutput: 'amonite-craft.js',
    scriptExtensions: ['.js'],
    babelConfig: { presets: ['@babel/env'], comments: false, sourceMap: false }
})
