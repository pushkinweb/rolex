import webpack from 'webpack'
import path from 'path'
import { IBuildPaths, IBuilEnv } from './config/webpack/types/config'
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig'

export default (env: IBuilEnv) => {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const mode = env.mode || 'development'
    const PORT = env.port || 3081

    const isDev = mode === 'development'
    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })

    return config
}
