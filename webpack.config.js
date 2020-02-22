const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})
module.exports = {
    //编译模式
    mode: 'development',
    entry: path.join(__dirname, './src/index.js'),//默认为inedx.js
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.js'//默认为main.js
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },//?modules启用css模块化
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // {test:/\.scss$/,use:['style-loader','css-loader?modules&localIdentName=[name]_[local]-[hash:5]','sass-loader']},
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            },
            { test: /\.jpg|png|bmp|gif|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=16940' },
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': path.join(__dirname, './src')
        }
    },

    plugins: [htmlPlugin]
}