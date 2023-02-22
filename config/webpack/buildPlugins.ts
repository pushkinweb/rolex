import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { type IBuildOptions } from './types/config'

export function buildPlugins({
    paths,
    isDev
}: IBuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].   css',
            chunkFilename: 'css/[id].[contenthash:8].css'
        }),
        isDev && new webpack.HotModuleReplacementPlugin(),
        isDev && new ReactRefreshWebpackPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: true,
            analyzerHost: 'localhost',
            analyzerPort: 4444
        })
    ].filter(Boolean)
}
