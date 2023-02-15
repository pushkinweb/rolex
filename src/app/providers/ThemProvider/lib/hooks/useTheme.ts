import { useContext } from 'react'

import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext
} from '../../ui/ThemeContext'

interface IResultUseTheme {
    theme: Theme
    toggleTheme: () => void
}

export function useTheme(): IResultUseTheme {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = (): void => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}
