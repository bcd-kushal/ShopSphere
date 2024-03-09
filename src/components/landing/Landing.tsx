import { landingPageSpacing } from "@/utils/spacings"
import { HeroLandingSection } from "./hero/Hero"
import { TopDealsOfTheDaySection, ShopByCategorySection, RecentlyViewedSection, InspiredByWishlistSection, YouMayAlsoLikeSection } from "./rows/Rows"
import { ThemeType } from "@/utils/types"

export function LandingPage({theme}:{theme:ThemeType}) {
    return (
        <main className={`flex flex-col justify-start gap-7 md:gap-5 ${landingPageSpacing} mx-0 md:mx-0`}>
            <HeroLandingSection theme={theme}/>
            <TopDealsOfTheDaySection />
            <ShopByCategorySection />
            <RecentlyViewedSection />
            <InspiredByWishlistSection />
            <YouMayAlsoLikeSection />
        </main>
    )
}