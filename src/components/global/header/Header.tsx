import { Hamburger, Wishlist, ShoppingBag, Search, ShopSphereLogo } from "./headerComponents/headerComponents"
import { LeftMenuBar } from "../../shadcn/menubar"
import { headerSpacing } from "@/utils/spacings"

export function Header() {


    return(
        <header className= {`fixed w-[100%] z-50 flex items-center justify-between ${headerSpacing}`}>
            <div className="flex gap-4 items-center justify-start">
                <Hamburger className="flex md:hidden desktop:flex"/>
                <ShopSphereLogo/>
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