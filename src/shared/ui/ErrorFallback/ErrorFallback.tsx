import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

interface IErrorFallbackProps {
    error: Error
    resetErrorBoundary: (...args: unknown[]) => void
}

export const ErrorFallback: FC<IErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
    const { t } = useTranslation('bomb')

    return (
        <div role='alert'>
            <p>{t('Что то пошло не так:')}</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>{t('Попробовать снова')}</button>
        </div>
    )
}
