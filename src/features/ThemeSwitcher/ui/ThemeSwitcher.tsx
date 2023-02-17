import { type FC } from 'react'

import { Theme, useTheme } from 'app/providers/ThemProvider'
import ButtonThemeDark from 'shared/assets/icons/theme-dark.svg'
import ButtonThemeLight from 'shared/assets/icons/theme-light.svg'
import { cn } from 'shared/lib/utils/classNames'
import { Button, ThemeButton } from 'shared/ui/Button'

import s from './ThemeSwitcher.module.scss'

interface IThemeButtonProps {
    className?: string
}

export const ThemeSwitcher: FC<IThemeButtonProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            className={cn(s.ThemeSwitcher, [className], {})}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.DARK ? <ButtonThemeDark /> : <ButtonThemeLight />}
        </Button>
    )
}
