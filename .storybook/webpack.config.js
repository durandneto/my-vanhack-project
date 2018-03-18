const path = require('path');
module.exports = {
    plugins: [],
    module: {
        rules: [
           {
            test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
            loaders: ['file-loader'],
            include: path.resolve(__dirname, '../')
            },{
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
              },
        ],
    },
    externals: {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'react/addons': true
    }
};
