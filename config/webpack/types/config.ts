export type TBuildMode = 'production' | 'development'

export interface IBuilEnv {
    mode: TBuildMode
    port: number
}

export interface IBuildPaths {
    entry: string
    build: string
    html: string
    src: string
}

export interface IBuildOptions {
    mode: TBuildMode
    paths: IBuildPaths
    isDev: boolean
    port: number
}
