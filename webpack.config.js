const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/index.jsx',
    output: {
        path: path.resolve(__dirname),
        filename: 'app/assets/javascripts'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};
