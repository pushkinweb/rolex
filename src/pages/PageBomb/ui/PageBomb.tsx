import { type FC, useEffect, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useTranslation } from 'react-i18next'

import { cn } from 'shared/lib/utils/classNames'
import { ErrorFallback } from 'shared/ui/ErrorFallback/ErrorFallback'

import s from './PageBomb.module.scss'

interface IPageBombProps {
    className?: string
}

interface IBombProps {
    value: string
}

const Bomb: FC<IBombProps> = (props) => {
    const { value } = props
    const { t } = useTranslation('bomb')

    useEffect(() => {
        if (value === 'bomb') {
            throw new Error(`💥 ${t('БУУУМ')} 💥`)
        }
    }, [value])

    return (
        <div>
            {t('Ты ввел')} {value}
        </div>
    )
}

export const PageBomb: FC<IPageBombProps> = ({ className }) => {
    const { t } = useTranslation('bomb')
    const [value, setValue] = useState('')

    return (
        <div className={cn(s.PageBoomb, [className], {})}>
            <h1>{t('Страница для тестирования Error Boundary')}</h1>
            <input
                placeholder={t(
                    'Введи значение bomb для того, чтобы поймать ошибку!'
                )}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            />
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => {
                    setValue('')
                }}
                resetKeys={[value]}
            >
                <Bomb value={value} />
            </ErrorBoundary>
        </div>
    )
}
