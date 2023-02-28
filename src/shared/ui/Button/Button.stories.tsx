import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Button, ThemeButton } from './Button'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
    return <Button {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text'
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR
}

export const Outlined = Template.bind({})
Outlined.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE
}
