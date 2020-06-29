const path = require('path')
const { prod } = require('./workers/prod-require');

prod(() => {}, {
    scriptEntry: './module.js',
    scriptOutput: 'index.js',
    scriptExtensions: ['.js'],
    babelConfig: { presets: ['@babel/env', 'minify'], ast: false, comments: false, sourceMap: false }
})
