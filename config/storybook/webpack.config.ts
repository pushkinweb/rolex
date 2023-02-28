import path from 'path'

import type webpack from 'webpack'

import { buildCssLoader } from '../webpack/loaders/buildCssLoader'
import { type IBuildPaths } from '../webpack/types/config'

export default ({
    config
}: {
    config: webpack.Configuration
}): webpack.Configuration => {
    const paths: IBuildPaths = {
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.ts', '.tsx')
    config.module.rules.push(buildCssLoader(true))

    return config
}
