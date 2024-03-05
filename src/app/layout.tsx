import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Outfit as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { getTheme } from "@/server/theme/theme"
import "./globals.css"
import Footer from "@/components/global/footer/Footer"
import { ContextMenuPopupList } from "@/components/global/RightClickContext"
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu"


export const metadata: Metadata = { title: "Create Next App", description: "Generated by create next app" }

const inter = Inter({ subsets: ["latin"] })
const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" })

export type ThemeType = 'light' | 'dark'

export default async function RootLayout({ children }: { children: Readonly<React.ReactNode> }) {
	const theme: ThemeType = await getTheme()
	return (
		<html lang="en" className={theme} suppressHydrationWarning>
			<body className={cn("min-h-screen bg-background dark:bg-background-dark font-sans antialiased", fontSans.variable)}>
				<ContextMenu>
					<ContextMenuTrigger>
						{children}
						<Footer theme={theme} />
					</ContextMenuTrigger>
					<ContextMenuPopupList/>
				</ContextMenu>
			</body>
		</html>
	)
}