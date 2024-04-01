// Delcaring Client Component
"use client"
import { Outfit as FontSans } from "next/font/google"


// Importing Components
import Sidebar from "@/components/admin/Sidebar"
import Topbar from "@/components/admin/Topbar"

// Importing Neccessary Packages
import React, { useRef } from "react"
const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" })


// Exporting Default function for AdminLayout
export default function AdminLayout({ children }:{ children:React.ReactNode }) {
    // Reference Variable for Sidebar
    const sidebarReference:any = useRef(null)

    // Function to change sidebar sidebar state
    const barReferer = sidebarReference?.current as HTMLElement 
    const changeSidebarState = async () => {
        if (barReferer.style.transform === "") 
            sidebarReference.current.style.transform = "translateX(0px)"
        else if (barReferer.style.transform === "translateX(0px)") 
            sidebarReference.current.style.transform = "translateX(-100%)"
        else if (barReferer.style.transform === "translateX(-100%)") 
            sidebarReference.current.style.transform = "translateX(0px)"
    }

    // Returing JSX
    return (
        <body className={fontSans.className}>
			<main className="flex relative w-dvw h-dvh overflow-hidden">
                <Sidebar sidebarReference={sidebarReference} changeSidebarState={changeSidebarState} />
            	<section className="w-full h-screen overflow-x-hidden overflow-y-auto">
            	    <Topbar changeSidebarState={changeSidebarState} />
            	    <div className="w-full">{children}</div>
            	</section>
            </main>
        </body>
    )
}
