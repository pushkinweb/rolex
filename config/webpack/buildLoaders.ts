import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IBuildOptions } from './types/config'

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    modules: {
                        auto: true,
                        localIdentName: isDev
                            ? '[local]__[hash:base64:5]'
                            : '[hash:base64:5]'
                    }
                }
            },
            // Compiles Sass to CSS
            { loader: 'sass-loader', options: { sourceMap: true } }
        ]
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    return [typeScriptLoader, cssLoader, svgLoader, fileLoader]
}
