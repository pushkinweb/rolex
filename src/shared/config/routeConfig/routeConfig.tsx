export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

/* export const RouterConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main.json,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage />
    }
} */
