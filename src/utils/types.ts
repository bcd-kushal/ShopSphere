export type ClassNameType      = string
export type CardColorType       = string

export type ThemeType           = 'light' | 'dark'

export type NonNegativeIntegerType<T extends number> = number extends T ? never : `${T}` extends `-${string}` | `${string}.${string}` ? never : T
