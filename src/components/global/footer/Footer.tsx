import { ThemeType } from "@/app/layout"
import { FooterInfoBox, FooterLinksBox, FooterSocialsAndLogoBox } from "./footerComponents/footerComponents"
import ThemeButton from "../theme/ThemeToggle"

export default function Footer({ theme }:{ theme:ThemeType }){
    return(
        <footer className="flex flex-col gap-8 md:gap-5 md:justify-between md:flex-row bg-transparent mt-[90px] mb-6 md:mb-10 mx-5 md:mx-8">
            <FooterSocialsAndLogoBox/>
            <FooterLinksBox/>
            <FooterInfoBox theme={theme}/>
            <ThemeButton theme={theme} className="md:hidden"/>
        </footer>
    )
}