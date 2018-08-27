/**
 * Created by ww on 2018/5/28.
 */
const argv = require('yargs-parser')(process.argv.slice(2));
const marge = require('webpack-merge');

const { VueLoaderPlugin } = require('vue-server-renderer');

const _mode = argv.mode || "development";
const _modeflag = (_mode == 'production') ? true : false;

const _mergeConfig = require(`./config/webpack.${_mode}.js`);

const { join } = require('path');

let _entry = {}; //webpack 公用的入口
let _plugins = [new VueLoaderPlugin()]; //webpack公用插件


let webpackConfig = {
    output: {
        path: join(__dirname,'./dist/assets/'),
        publicPath: '/',
        filename: 'scripts/[name].bundle.js'
    },

    watch: !_modeflag,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1
    },

    plugins: [
        ..._plugins
    ]

}
module.exports = marge(_mergeConfig,webpackConfig);
