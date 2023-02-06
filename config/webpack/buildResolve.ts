import webpack from 'webpack'
import { IBuildOptions } from './types/config'

export function buildResolve(options: IBuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}
