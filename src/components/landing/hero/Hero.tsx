import { ThemeType } from "@/utils/types"
import { DataLandingSection, ImageLandingSection } from "./heroComponents/Sections"


export function HeroLandingSection({ theme }:{ theme:ThemeType }) {
    const shades = [ "#FF4081", "#2196F3", "#FF5722", "#FFEB3B", "#00BCD4", "#9C27B0" ]
    return(
        <section id="hero" className={`grid h-[100dvh] w-[100%]`}>
            <ImageLandingSection closeAfter={7} shuttingSpeed={1.7} startIndex={0} products={["man.png","man2.png"]}/>
            <DataLandingSection shades={shades} theme={theme}/>
        </section>
    )
}