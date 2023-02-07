import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolve } from './buildResolve'
import { IBuildOptions } from './types/config'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options: IBuildOptions) {
    const { mode, paths, isDev } = options

    return {
        mode,
        entry: {
            main: paths.entry
        },
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolve(options)
    }
}
