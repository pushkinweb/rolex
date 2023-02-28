import { render, screen } from '@testing-library/react'

import { Button } from './index'

describe('ButtonTest', () => {
    test('Test main button', () => {
        render(<Button>{`Test111`}</Button>)
        expect(screen.getByText('Test111')).toBeInTheDocument()
    })
})
