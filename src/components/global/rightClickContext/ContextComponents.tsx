import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"
import { ArrowLeftIcon, ArrowRightIcon, MagnifyingGlassIcon, ReloadIcon } from "@radix-ui/react-icons"

export function RightClickSearchButton({ className }:{ className?:string }) {
    return( 
    <span className={className}>
        <TooltipProvider><Tooltip><TooltipTrigger asChild>
            <MagnifyingGlassIcon className="hover:bg-[#A8A6A860] hover:dark:bg-dusk-dark-800 px-1 py-1 w-7 h-[100%] aspect-square rounded cursor-pointer"/>
        </TooltipTrigger><TooltipContent className="bg-glass dark:bg-glass-dark text-[#121212] dark:text-white">Search</TooltipContent></Tooltip></TooltipProvider>
    </span> )
}

export function RightClickBackButton({ className }:{ className?:string }) {
    return( 
    <span className={className}>
        <TooltipProvider><Tooltip><TooltipTrigger asChild>
            <ArrowLeftIcon className="hover:bg-[#A8A6A860] hover:dark:bg-dusk-dark-800 px-1 py-1 w-7 h-[100%] aspect-square rounded cursor-pointer"/>
        </TooltipTrigger><TooltipContent className="bg-glass dark:bg-glass-dark text-[#121212] dark:text-white">Go back</TooltipContent></Tooltip></TooltipProvider>
    </span> )
}

export function RightClickForwardButton({ className }:{ className?:string }) {
    return( 
    <span className={className}>
        <TooltipProvider><Tooltip><TooltipTrigger asChild>
            <ArrowRightIcon className="hover:bg-[#A8A6A860] hover:dark:bg-dusk-dark-800 px-1 py-1 w-7 h-[100%] aspect-square rounded cursor-pointer"/>
        </TooltipTrigger><TooltipContent className="bg-glass dark:bg-glass-dark text-[#121212] dark:text-white">Forward</TooltipContent></Tooltip></TooltipProvider>
    </span> )
}

export function RightClickReloadButton({ className }:{ className?:string }) {
    return( 
    <span className={className}>
        <TooltipProvider><Tooltip><TooltipTrigger asChild>
            <ReloadIcon className="hover:bg-[#A8A6A860] hover:dark:bg-dusk-dark-800 px-1 py-[5.5px] w-7 h-[100%] aspect-square rounded cursor-pointer"/>
        </TooltipTrigger><TooltipContent className="bg-glass dark:bg-glass-dark text-[#121212] dark:text-white">Reload</TooltipContent></Tooltip></TooltipProvider>
    </span> )
}