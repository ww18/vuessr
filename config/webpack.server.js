/**
 * Created by ww on 2018/7/24.
 */
const path = require('path');
const rootPath = path.join(__dirname,'..');
const vueSSRServerPlugin = require('vue-server-renderer/server-plugin');
module.exports = {
    entry: [rootPath + '/src/webapp/entry-server.js'],
    target: 'node',
    output:{
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new vueSSRServerPlugin()
    ]
}