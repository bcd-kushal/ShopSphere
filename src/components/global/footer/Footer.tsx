import { ThemeType } from "@/utils/types"
import { FooterInfoBox, FooterLinksBox, FooterSocialsAndLogoBox } from "./footerComponents/footerComponents"
import ThemeButton from "../theme/ThemeToggle"
import { footerSpacing } from "@/utils/spacings"

export default function Footer({ theme }:{ theme:ThemeType }){
    return(
        <footer className={`flex flex-col gap-8 md:gap-5 md:justify-between md:flex-row bg-transparent ${footerSpacing}`}>
            <FooterSocialsAndLogoBox/>
            <FooterLinksBox/>
            <FooterInfoBox theme={theme}/>
            <ThemeButton theme={theme} className="md:hidden"/>
        </footer>
    )
}