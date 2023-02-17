import { type FC, type ReactNode } from 'react'

import { ThemeProvider } from 'app/providers/ThemProvider'

interface IAppProviderProps {
    children?: ReactNode
}

export const AppProvider: FC<IAppProviderProps> = ({ children }) => {
    return (
        <>
            <ThemeProvider>{children}</ThemeProvider>
        </>
    )
}
