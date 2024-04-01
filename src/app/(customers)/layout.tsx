import { getTheme } from "@/server/theme/theme"
import { cn } from "@/lib/utils"
import Footer from "@/components/global/footer/Footer"
import { ContextMenuPopupList } from "@/components/global/rightClickContext/RightClickContext"
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu"
import { ThemeType } from "@/utils/types"
import { Outfit as FontSans } from "next/font/google"


const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" })


export default async function RootLayout({ children }: { children: Readonly<React.ReactNode> }) {
    const theme: ThemeType = await getTheme()
    return (
        <body className={cn("min-h-screen bg-background dark:bg-background-dark font-sans antialiased", fontSans.variable)}>
            <ContextMenu>
                <ContextMenuTrigger>
                    {children}
                    <Footer theme={theme} />
                </ContextMenuTrigger>
                <ContextMenuPopupList theme={theme} />
            </ContextMenu>
		</body>
    )
}
