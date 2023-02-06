import React, { FC, ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface IProps {
    children: ReactNode
}

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

export const ThemeProvider: FC<IProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultValue = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme
        }),
        [theme]
    )

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    )
}
