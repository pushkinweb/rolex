import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface IResultUseTheme {
    theme: Theme
    toogleTheme: () => void
}

export function useTheme():IResultUseTheme {

    const {theme, setTheme} = useContext(ThemeContext)

    const toogleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme: theme,
        toogleTheme: toogleTheme
    }
}