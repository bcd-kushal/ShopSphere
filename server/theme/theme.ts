'use server'
import { cookies } from "next/headers"

const COOKIE_THEME_NAME = 'shopsphere_theme'
const DEFAULT_THEME     = 'light'

export const getTheme = async () => {
    try{
        if(cookies().has(COOKIE_THEME_NAME))
            return cookies().get(COOKIE_THEME_NAME)?.value==='dark'? 'dark':'light'
        else{
            cookies().set(COOKIE_THEME_NAME,DEFAULT_THEME)
            return DEFAULT_THEME
        }
    } catch {
        return DEFAULT_THEME
    }
}


export const toggleTheme = async () => {
    if(cookies().has(COOKIE_THEME_NAME)){
        const theme = cookies().get(COOKIE_THEME_NAME)?.value
        cookies().set(COOKIE_THEME_NAME,theme==='light'?'dark':'light')
    } else {
        cookies().set(COOKIE_THEME_NAME,DEFAULT_THEME)
    }
}