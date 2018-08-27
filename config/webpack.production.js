/**
 * Created by ww on 2018/5/28.
 */
const minify = require('html-minifier').minify;
const {resolve, join, basename} = require('path');
module.exports = {
    output: {
        filename: 'scripts/[name].bundle.js?v=[hash]'
    },
    plugins: [

    ]
}