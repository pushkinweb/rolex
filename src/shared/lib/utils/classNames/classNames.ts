type Mods = Record<string, boolean | string>

export function classNames(
    cls: string,
    additional: string[] = [],
    mods: Mods = {}
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
}
