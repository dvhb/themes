const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    templateVars: {
        googleAnalytics: {
            id: 'XXX',
        }
    },

    extendWebpackConfig(webpackConfig) {
        const dir = path.resolve(__dirname, 'src');

        webpackConfig.output.filename = '[name].js';
        webpackConfig.output.chunkFilename = '[name].js';
        webpackConfig.plugins.forEach(function (plugin, i) {
            if (plugin.filename === '[name].[contenthash].css') {
                webpackConfig.plugins[i] = new ExtractTextPlugin('[name].css');
            }
        });

        // webpackConfig.module.loaders.push(
        //     {
        //         test: /\.<extention>?$/,
        //         include: dir,
        //         loader: '<loader>',
        //     }
        // );

        return webpackConfig;
    }
};
