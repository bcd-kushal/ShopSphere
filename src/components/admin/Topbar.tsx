// Importing Neccessary Packages
import { usePathname } from "next/navigation"

// Importing Icons
import { SearchIcon, BarsIcon, BellIcon, SettingsIcon, LightThemeIcon, DarkThemeIcon, DownloadIcon } from "./Icons"

// Exporting Default function for Topbar
interface TopbarProps { changeSidebarState: () => Promise<void>, theme?:boolean }
export default function Topbar({ changeSidebarState, theme = true }:TopbarProps) {
    const title = usePathname().split("/")[2].charAt(0).toUpperCase() + usePathname().split("/")[2].slice(1)
    const message = "Welcome to your " + usePathname().split("/")[2] + " " + (usePathname().split("/")[3] || "")

    // Returning JSX
    return (
        <div>
            <header className="flex w-full justify-between items-center gap-2 py-2 sm:py-4 px-2 md:px-4 lg:px-6">
                {/* Left Side Starts Here */}
                <div className="flex items-center gap-2">
                    <div className="block md:hidden cursor-pointer" onClick={changeSidebarState}><BarsIcon /></div>
                    <div className="w-36 sm:w-48 md:w-56 relative"><input className="w-full py-2 px-2 bg-gray-200 outline-none rounded" type="text" placeholder="search" /> <span className="absolute top-3 right-3 fill-gray-500"><SearchIcon width="15px" height="15px" /></span></div>
                </div>
                {/* Left Side Ends Here */}

                {/* Right Side Starts Here */}
                <div className="flex items-center gap-1">
                    <div className="p-2 fill-gray-500 cursor-pointer rounded-full transition duration-300 hover:bg-gray-200 active:bg-gray-400"> {theme ? <LightThemeIcon width="18px" height="18px" /> : <DarkThemeIcon width="18px" height="18px" />} </div>
                    <div className="p-2 fill-gray-500 cursor-pointer rounded-full transition duration-300 hover:bg-gray-200 active:bg-gray-400"><BellIcon width="18px" height="18px" /></div>
                    <div className="p-2 fill-gray-500 cursor-pointer rounded-full transition duration-300 hover:bg-gray-200 active:bg-gray-400"><SettingsIcon width="18px" height="18px" /></div>
                </div>
                {/* Right Side Ends Here */}
            </header>
            <div className="flex w-full justify-between items-center gap-2 py-3 sm:py-4 px-2 md:px-4 lg:px-6 mb-4">
                <div className="">
                    <h1 className="text-xl sm:text-3xl md:text-4xl font-bold">{title}</h1>
                    <h3 className="text-xs sm:text-xl md:text-2xl text-emerald-400 font-medium">{message}</h3>
                </div>
                <button className="flex items-center text-gray-800 bg-indigo-400 text-sm font-medium p-2 sm:py-2 sm:px-4 gap-2 rounded-lg hover:rounded-md hover:bg-indigo-300 transition duration-300"><span className="hidden sm:inline"><DownloadIcon /></span>Download Reports</button>
            </div>
        </div>
    )
}