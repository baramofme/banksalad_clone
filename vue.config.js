const configureAPI = require('./src/server/configure')

module.exports = {
    devServer: {
        before: configureAPI,
        disableHostCheck: true
    },
    productionSourceMap : false,
    configureWebpack: {
        devtool: 'source-map',
        output: {
            devtoolModuleFilenameTemplate: info => {
                var $filename = 'sources://' + info.resourcePath;
                if (info.resourcePath.match(/\.vue$/) && !info.query.match(/type=script/)) {
                    $filename = 'webpack-generated:///' + info.resourcePath + '?' + info.hash;
                }
                return $filename;
            },
            devtoolFallbackModuleFilenameTemplate: 'webpack:///[resource-path]?[hash]',
        },
    },
    css: {
        sourceMap: true
    }
};
