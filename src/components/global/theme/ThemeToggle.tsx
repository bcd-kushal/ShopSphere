'use client'
import { ThemeType } from "@/app/layout"
import { toggleTheme } from "@/server/theme/theme"
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"

export default function ThemeButton({ theme, className }:{ theme:ThemeType, className?:string }) {
    return( 
    <span className={className} onClick={()=>toggleTheme()}>
        <TooltipProvider><Tooltip><TooltipTrigger asChild>
            {theme==='light'?<SunIcon/>:<MoonIcon/>}
        </TooltipTrigger><TooltipContent className="bg-glass dark:bg-glass-dark text-[#121212] dark:text-white">Theme: {theme==='dark'?'Dark':'Light'}</TooltipContent></Tooltip></TooltipProvider>
    </span> )
}