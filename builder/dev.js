const { dev } = require("./factory/dev");
const expressRoute = require("../test/stub/api")

dev(() => {
    console.log('Ready!');
}, {
    styleEntry: './test/app/main/index.scss',
    styleOutput: 'style.css',
    styleListen: ['./test/app'],

    scriptEntry: './test/app/main/index.js',
    scriptOutput: 'script.js',
    scriptListen: ['./test/app','./libs'],
    scriptExtensions: ['.js'],
    
    templateEntry: './test/config/document.template.html',
    templateOutput: 'index.html',
    
    localServer: {
        host: 'localhost',
        port: 3000,
        folder: './build'
    },
    stubServer: {
        host: 'localhost',
        port: 2999,
        root: '/api/v1',
        api: expressRoute
    }
})
