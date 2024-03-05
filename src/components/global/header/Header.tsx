import { Hamburger, Wishlist, ShoppingBag, Search } from "./headerComponents/headerComponents"
import { ShopSphereIcon } from "@/svgs/svgs"
import { LeftMenuBar } from "../../shadcn/menubar"
import Link from "next/link"

export function Header() {


    return(
        <header className="px-6 py-6 sticky top-0 z-50 flex items-center justify-between">
            <div className="flex gap-4 items-center justify-start">
                <Hamburger className="flex md:hidden desktop:flex"/>
                <Link href="/"  className="ml-3 md:mr-5 md:ml-[-8px]"><ShopSphereIcon/></Link>
                <LeftMenuBar className="hidden md:flex"/>
            </div>
            <div className="flex gap-6 md:gap-8 items-center">
                <Wishlist/>
                <ShoppingBag/>
                <Search/>    
            </div>        
        </header>
    )
}