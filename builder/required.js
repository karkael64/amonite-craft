const path = require('path')
const { prod } = require("./factory/prod");

prod(() => {}, {
    scriptEntry: './module',
    scriptOutput: 'index.js',
    scriptExtensions: ['.js']
})
