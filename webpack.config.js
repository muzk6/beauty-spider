var config = {
    entry: {
        app: ['babel-polyfill', './index'],
    },
    resolve: {
        extensions: ['', '.js']
    },
    target: 'node',
    node: {
        __filename: false,
        __dirname: false
    },
    output: {
        path: 'dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.json$/, loader: 'json'},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
        ]
    },
};

module.exports = config;