import { type FC, type ReactNode, Suspense } from 'react'

import { Loader } from 'shared/ui/Loader'
import { PageDisabled } from 'shared/ui/PageDisabled'

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
