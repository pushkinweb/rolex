import { FC } from 'react'
import s from './ThemeSwitcher.module.scss'
import { cn } from 'shared/lib/utils/classNames'
import { Theme, useTheme } from 'app/providers/ThemProvider'
import { Button, ThemeButton } from 'shared/ui/Button'
import ButtonThemeDark from 'shared/assets/icons/theme-dark.svg'
import ButtonThemeLight from 'shared/assets/icons/theme-light.svg'

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
