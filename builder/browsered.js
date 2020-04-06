const path = require('path')
const { prod } = require("./factory/prod");

prod(() => {}, {
    scriptEntry: path.resolve(__dirname, 'factory/windowed.js'),
    scriptOutput: 'amonite-craft.js',
    scriptExtensions: ['.js'],
    babelConfig: { presets: ['@babel/env', 'minify'], comments: false },
})
