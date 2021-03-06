const path = require('path')
const { prod } = require('./workers/prod-browser');

prod(() => {}, {
    scriptEntry: path.resolve(__dirname, 'templates/browsered.js'),
    scriptOutput: 'amonite-craft.js',
    scriptExtensions: ['.js'],
    babelConfig: { presets: ['@babel/env', 'minify'], ast: false, comments: false, sourceMap: true }
})
