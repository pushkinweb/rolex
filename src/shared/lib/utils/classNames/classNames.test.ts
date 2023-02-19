import { cn } from './index'

describe('classNames', () => {
    test('Test main class', () => {
        expect(cn('someClass')).toBe('someClass')
    })
    test('Test array additional', () => {
        expect(cn('someClass', ['class1', 'class2'])).toBe(
            'someClass class1 class2'
        )
    })
    test('Test empty array additional', () => {
        expect(cn('someClass', [])).toBe('someClass')
    })
    test('Test two options true', () => {
        expect(cn('someClassMods', [], { mod1: true, mod2: true })).toBe(
            'someClassMods mod1 mod2'
        )
    })
    test('Test options false', () => {
        expect(cn('someClass', [], { mod1: false, mod2: true })).toBe(
            'someClass mod2'
        )
    })
    test('Test options undefined', () => {
        expect(cn('someClass', [], { mod1: true, mod2: undefined })).toBe(
            'someClass mod1'
        )
    })
})
