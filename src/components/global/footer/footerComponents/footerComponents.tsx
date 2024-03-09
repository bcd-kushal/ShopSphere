import { Popover, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { SocialLinkPopover } from "./scraps/socialLinkPopups"
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import ThemeButton from "../../theme/ThemeToggle"
import { ThemeType } from "@/utils/types"
import { SocialLinkRow } from "./scraps/socialLinks"


/*************************************************************** 
 **** left side ******
 *****************************************************************/
export function FooterSocialsAndLogoBox() {
    return (
        <div className="flex flex-col">

            {/* shopsphere icon */}
            <Link href="/"><div className="text-3xl font-bold md:text-2xl text-dusk-light-active dark:text-dusk-dark-active">ShopSphere</div></Link>

            {/* social links */}
            <SocialLinkRow/>

            {/* be a seller */}
            <Button className="mt-3 w-fit bg-dusk-light-active dark:bg-dusk-dark-active dark:text-dusk-dark-900">Become a seller</Button> 
        </div>
    )
}


/*************************************************************** 
**** middle side ******
*****************************************************************/

export function FooterLinksBox() {
    /* shadcn drawer */
    return (
        <div className="flex gap-[80px] my-5 md:my-0 justify-start items-start">
            <div className="flex flex-col h-[100%] gap-3 items-start justify-between">
                <Link href="#" className="text-sm md:mt-4 text-dusk hover:text-dusk-light-active dark:text-dusk-dark-inactive hover:dark:text-dusk-dark-active">Men</Link>
                <Link href="#" className="text-sm text-dusk hover:text-dusk-light-active dark:text-dusk-dark-inactive hover:dark:text-dusk-dark-active">Women</Link>
                <Link href="#" className="text-sm text-dusk hover:text-dusk-light-active dark:text-dusk-dark-inactive hover:dark:text-dusk-dark-active">Kids</Link>
                <Link href="#" className="text-sm text-dusk hover:text-dusk-light-active dark:text-dusk-dark-inactive hover:dark:text-dusk-dark-active">Home and living</Link>
                <Link href="#" className="text-sm text-dusk hover:text-dusk-light-active dark:text-dusk-dark-inactive hover:dark:text-dusk-dark-active">Beauty</Link>
                <Link href="#" className="text-sm text-dusk hover:text-dusk-light-active dark:text-dusk-dark-inactive hover:dark:text-dusk-dark-active">Sports</Link>
            </div>
            <div className="flex flex-col h-[100%] gap-3 items-start justify-between">
                <Link href="#" className="text-sm md:mt-4 text-dusk hover:text-dusk-light-active dark:text-dusk-dark-inactive hover:dark:text-dusk-dark-active">Shipping</Link>
                <Link href="#" className="text-sm text-dusk hover:text-dusk-light-active dark:text-dusk-dark-inactive hover:dark:text-dusk-dark-active">Track orders</Link>
                <Link href="#" className="text-sm text-dusk hover:text-dusk-light-active dark:text-dusk-dark-inactive hover:dark:text-dusk-dark-active">Cancellation</Link>
                <Link href="#" className="text-sm text-dusk hover:text-dusk-light-active dark:text-dusk-dark-inactive hover:dark:text-dusk-dark-active">Returns</Link>
                <Link href="#" className="text-sm text-dusk hover:text-dusk-light-active dark:text-dusk-dark-inactive hover:dark:text-dusk-dark-active">Contact us</Link>
                <Link href="#" className="text-sm text-dusk hover:text-dusk-light-active dark:text-dusk-dark-inactive hover:dark:text-dusk-dark-active">Terms and conditions</Link>
            </div>
        </div>
    )
}


/*************************************************************** 
 **** right side ******
 *****************************************************************/
export function FooterInfoBox({ theme }: { theme:ThemeType }) {
    return (
        <div className="pr-8 md:mt-8 mt-6">
            <div className="text-xl italic text-dusk-light-active dark:text-dusk-dark-active">Infinite wardrobe. Infinite styles.</div>
            <div className="text-xs text-dusk-light-300 dark:text-dusk-dark-600">Copyright © {new Date().getFullYear()} </div>
            <div className="text-xs mt-6 md:w-[450px] mb-8 md:mb-0 text-dusk-light-inactive dark:text-dusk-dark-inactive">ShopSphere is a passion project of a month&apos;s hard work, and with that comes a number of re-iterated ideas and features that have been built to (near) perfection.</div>
            <ThemeButton theme={theme} className="hidden md:block md:mt-6"/>
        </div>
    )
}