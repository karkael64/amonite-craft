const { serie, parallel } = require('./stream')

const { html } = require('./document')
const { babel, reloadBabel } = require('./babel')
const { sass, reloadSass } = require('./sass')
const { local, stub } = require('./servers')

const build = parallel(babel, sass, html)
const servers = parallel(local, stub)
const reload = parallel(reloadBabel, reloadSass)

const dev = serie(build, servers, reload)


exports.babel = babel
exports.sass = sass
exports.build = build
exports.servers = servers
exports.reload = reload
exports.dev = dev
