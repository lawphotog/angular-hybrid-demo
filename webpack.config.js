const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'app': './app/main.ts',
        'ng1': './app/index.ts'
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        path: path.resolve(__dirname, 'app/dist'),
        filename: '[name].bundle.js',
        libraryTarget: 'window',
        libraryExport: 'default'
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'app'),
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ]
}