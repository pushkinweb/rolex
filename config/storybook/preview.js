import { addDecorator } from '@storybook/react'

import { StyleDecorator } from 'shared/config/storybook/decorators/StyleDecorator'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    themes: [
        { name: 'light', class: ['app', 'light'], color: '#F5F5F5', default: true },
        { name: 'dark', class: ['app', 'dark'], color: '#04106d' }
    ]
}

addDecorator(StyleDecorator)
