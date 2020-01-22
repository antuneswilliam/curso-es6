// // Descomentar para 2.1_Webpack_server
// module.exports = {
//     entry: './2.1_Webpack_server/src/main.js',
//     output: {
//         path: __dirname + '/2.1_Webpack_server/public',
//         filename: 'bundle.js',
//     },
//     devServer: {
//         contentBase: __dirname + '/2.1_Webpack_server/public',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                 }
//             }
//         ],
//     },
// };

module.exports = {
    entry: ['@babel/polyfill', './3.1_Async_await/src/main.js', './2.1_Webpack_server/src/main.js'],
    output: {
        path: __dirname + '/3.1_Async_await/public',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/3.1_Async_await/public',
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