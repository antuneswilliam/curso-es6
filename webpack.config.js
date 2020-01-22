module.exports = {
    entry: ['@babel/polyfill', './4.1_Aplicacao/src/main.js', './3.1_Async_await/src/main.js', './2.1_Webpack_server/src/main.js'],
    output: {
        path: __dirname + '/4.1_Aplicacao/public',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/4.1_Aplicacao/public',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};