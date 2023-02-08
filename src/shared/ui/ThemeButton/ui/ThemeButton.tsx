import { FC } from 'react'
import s from './ThemeButton.module.scss'
import { cn } from 'shared/lib/utils/classNames'
import { Theme, useTheme } from 'app/providers/ThemProvider'
import ButtonThemeDark from 'shared/assets/icons/theme-dark.svg'
import ButtonThemeLight from 'shared/assets/icons/theme-light.svg'

interface IThemeButtonProps {
    className?: string
}

export const ThemeButton: FC<IThemeButtonProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            className={cn(s.ThemeButton, [className], {})}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <ButtonThemeDark /> : <ButtonThemeLight />}
        </button>
    )
}
