import { HamburgerMenuIcon, MagnifyingGlassIcon, HeartIcon, LockClosedIcon } from "@radix-ui/react-icons"
import { Drawer, DrawerTrigger, } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { ShoppingBagDrawerContent, WishlistDrawerContent } from "./scraps/drawerContent"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { SearchPopupPage } from "./scraps/searchPage"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"
import Link from "next/link"
import { ShopSphereIcon } from "@/svgs/svgs"
import { headerIconShade, tooltipShade } from "@/utils/shades"
import { ClassNameProps } from "@/utils/types"


/*************************************************************** 
 **** left side ******
 *****************************************************************/
export function Hamburger({ className }: { className?: ClassNameProps }) {
    return (
        <span><HamburgerMenuIcon className={`${headerIconShade} ${className}`} /></span>
    )
}

export function ShopSphereLogo() {
    return (
        <TooltipProvider><Tooltip><TooltipTrigger asChild>
            <Link href="/"  className="ml-3 md:mr-5 md:ml-[-8px]"><ShopSphereIcon/></Link>
        </TooltipTrigger><TooltipContent className={tooltipShade}>ShopSphere</TooltipContent></Tooltip></TooltipProvider>
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
                    <Button variant="ghost" className="hover:bg-transparent p-0"><HeartIcon className={headerIconShade}/></Button>
                </DrawerTrigger>
            </TooltipTrigger><TooltipContent className={tooltipShade}>Wishlist</TooltipContent></Tooltip></TooltipProvider>
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
                    <Button variant="ghost" className="hover:bg-transparent p-0"><LockClosedIcon className={headerIconShade}/></Button>
                </DrawerTrigger>
            </TooltipTrigger><TooltipContent className={tooltipShade}>Shopping Bag</TooltipContent></Tooltip></TooltipProvider>
            <ShoppingBagDrawerContent />
        </Drawer>
    )
}

export function Search( {className}: {className?: ClassNameProps} ) {
    /* shadcn dialog */
    return (
        <Dialog>
            <TooltipProvider><Tooltip><TooltipTrigger asChild>
                <DialogTrigger asChild>
                    <Button variant="ghost" className={`hover:bg-transparent p-0 ${className}`}><MagnifyingGlassIcon className={headerIconShade}/></Button>
                </DialogTrigger>
            </TooltipTrigger><TooltipContent className={tooltipShade}>Search</TooltipContent></Tooltip></TooltipProvider>
            <SearchPopupPage />
        </Dialog>
    )
}