const moduloDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: moduloDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer:{
        contentBase:"./public",
        port: 9000
    },
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins:[
        new miniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module: {
        rules: [{
            test:/\.s?[ca]ss$/,
            use:[
                miniCssExtractPlugin.loader,
               // 'style-loader', //Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()....
              'sass-loader'
            ]
        },{
            test:/\.(png|svg|jpg|gif)$/, 
            use: ['file-loader']
        }]
    }
}