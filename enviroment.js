// Required for vue-loader v15
const VueLoaderPlugin = require('vue-loader/lib/plugin')
environment.plugins.append(
    'VueLoaderPlugin',
    new VueLoaderPlugin()
)

module.exports = environment