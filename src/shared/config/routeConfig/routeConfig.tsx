export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    BOMB = 'bomb'
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.BOMB]: '/bomb'
}

/* export const RouterConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main.json,
        element: <PageMain />
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <PageAbout />
    }
} */
