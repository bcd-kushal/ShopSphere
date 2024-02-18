// Declaring Client Component
"use client"

// Importing Packages
import React from 'react'
import createCache from '@emotion/cache'
import { useServerInsertedHTML } from 'next/navigation'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from './theme'

// Exporting Default ThemeRegistry wrapper function
export default function ThemeRegistry({ children }) {
    const options = { key: "mui" }
    const [{ cache, flush }] = React.useState(() => {
        const cache = createCache(options)
        cache.compat = true
        const prevInsert = cache.insert
        let inserted = []
        cache.insert = (...args) => {
            const serialized = args[1]
            if (cache.inserted[serialized.name] === undefined) { inserted.push(serialized.name) }
            return prevInsert(...args)
        }
        const flush = () => {
            const prevInserted = inserted
            inserted = []
            return prevInserted
        }
        return { cache, flush }
    })
    useServerInsertedHTML(() => {
        const names = flush()
        if (names.length === 0) { return null }
        let styles = ''
        for (const name of names) { styles += cache.inserted[name] }
        return (<style key={cache.key} data-emotion={`${cache.key} ${names.join(' ')}`} dangerouslySetInnerHTML={{ __html: styles }} />)
    })
    return (<CacheProvider value={cache}> <ThemeProvider theme={theme}><CssBaseline />{children}</ThemeProvider></CacheProvider>)
}