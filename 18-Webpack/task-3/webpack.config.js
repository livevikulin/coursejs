const path = require('path');

 module.exports = {
    mode: 'development',
    entry: {
        index: './src/script.js',
    },
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'build'),
    },
};
