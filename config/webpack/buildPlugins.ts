import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { IBuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({ paths }: IBuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[id].[contenthash:8].css'
        })
    ]
}
