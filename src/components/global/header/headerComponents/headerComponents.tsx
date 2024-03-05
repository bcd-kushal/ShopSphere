import { HamburgerMenuIcon, MagnifyingGlassIcon, HeartIcon, LockClosedIcon } from "@radix-ui/react-icons"
import { Drawer, DrawerTrigger, } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { ShoppingBagDrawerContent, WishlistDrawerContent } from "./scraps/drawerContent"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { SearchPopupPage } from "./scraps/searchPage"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"

export type ClassNameProps = string

/*************************************************************** 
 **** left side ******
 *****************************************************************/
export function Hamburger({ className }: { className?: ClassNameProps }) {
    return (
        <span><HamburgerMenuIcon className={` ${className}`} /></span>
    )
}


/*************************************************************** 
**** right side ******
*****************************************************************/

export function Wishlist() {
    /* shadcn drawer */
    return (
        <Drawer>
            <TooltipProvider><Tooltip><TooltipTrigger asChild>
                <DrawerTrigger asChild>
                    <Button variant="ghost" className="hover:bg-transparent p-0"><HeartIcon /></Button>
                </DrawerTrigger>
            </TooltipTrigger><TooltipContent className="bg-glass dark:bg-glass-dark text-[#121212] dark:text-white">Wishlist</TooltipContent></Tooltip></TooltipProvider>
            <WishlistDrawerContent />
        </Drawer>
    )
}

export function ShoppingBag() {
    /* shadcn drawer */
    return (
        <Drawer>
            <TooltipProvider><Tooltip><TooltipTrigger asChild>
                <DrawerTrigger asChild>
                    <Button variant="ghost" className="hover:bg-transparent p-0"><LockClosedIcon /></Button>
                </DrawerTrigger>
            </TooltipTrigger><TooltipContent className="bg-glass dark:bg-glass-dark text-[#121212] dark:text-white">Shopping Bag</TooltipContent></Tooltip></TooltipProvider>
            <ShoppingBagDrawerContent />
        </Drawer>
    )
}

export function Search() {
    /* shadcn dialog */
    return (
        <Dialog>
            <TooltipProvider><Tooltip><TooltipTrigger asChild>
                <DialogTrigger asChild>
                    <Button variant="ghost" className="hover:bg-transparent p-0"><MagnifyingGlassIcon /></Button>
                </DialogTrigger>
            </TooltipTrigger><TooltipContent className="bg-glass dark:bg-glass-dark text-[#121212] dark:text-white">Search</TooltipContent></Tooltip></TooltipProvider>
            <SearchPopupPage />
        </Dialog>
    )
}