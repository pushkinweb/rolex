import { FC, ReactNode, Suspense } from 'react'
import { PageDisabled } from 'shared/ui/PageDisabled'
import { Loader } from 'shared/ui/Loader'

interface ISuspenseLayoutProps {
    children?: ReactNode
}

export const SuspenseProvider: FC<ISuspenseLayoutProps> = ({ children }) => {
    return (
        <Suspense
            fallback={
                <PageDisabled>
                    <Loader />
                </PageDisabled>
            }
        >
            {children}
        </Suspense>
    )
}
