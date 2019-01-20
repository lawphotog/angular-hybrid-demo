const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app/main.ts',
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
        filename: 'app.bundle.js',
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