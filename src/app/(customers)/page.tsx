import { Header } from "@/components/global/header/Header"
import { LandingPage } from "@/components/landing/Landing"
import { getTheme } from "@/server/theme/theme"
import { ThemeType } from "@/utils/types"

export default async function HomePage() {
	const theme:ThemeType = await getTheme()
	return (
		<>
			<Header />
			<LandingPage theme={theme}/>
		</>
	)
}
