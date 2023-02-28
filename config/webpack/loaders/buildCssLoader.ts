import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'

export const buildCssLoader = (isDev: boolean): webpack.RuleSetRule => {
    return {
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
}
