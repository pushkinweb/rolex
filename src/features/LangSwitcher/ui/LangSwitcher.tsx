import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import LngEn from 'shared/assets/icons/en.svg'
import LngRu from 'shared/assets/icons/ru.svg'
import { Button, ThemeButton } from 'shared/ui/Button'

export enum LangEnums {
    RU = 'ru',
    EN = 'en'
}

interface ILangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<ILangSwitcherProps> = ({ className }) => {
    const { i18n } = useTranslation()

    const toggle = (): void => {
        i18n.changeLanguage(i18n.language === LangEnums.RU ? LangEnums.EN : LangEnums.RU)
    }

    return (
        <div>
            <Button onClick={toggle} theme={ThemeButton.CLEAR}>
                {i18n.language === LangEnums.RU && <LngEn width={48} height={48} />}
                {i18n.language === LangEnums.EN && <LngRu width={48} height={48} />}
            </Button>
        </div>
    )
}
