'use client'
import * as React from "react"
import { NavigationMenuContent, NavigationMenuLink, } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { ClassNameType } from "@/utils/types"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import Link from "next/link"
import { MENS_TRAY, WOMENS_TRAY, KIDS_TRAY, featuredData } from "@/data/menu/menuData"

interface MenuTrayProps { type: 'men' | 'women' | 'kid', className?: ClassNameType }
/*****************************************************
**** MENU TRAY ****
******************************************************/
export function MenuTrayHoverContent({ className, type }: MenuTrayProps) {
    const TRAY_DATA     = type === 'men' ? MENS_TRAY : type === 'women' ? WOMENS_TRAY : KIDS_TRAY
    const FEATURED_CARD = type === 'men' ? featuredData.men : type === 'women' ? featuredData.women : featuredData.kids
    const CARD_BG       = type === 'men' ? 'bg-[#e5e9f0]' : type === 'women' ? 'bg-[#f7eff8]' : 'bg-[#e2ede2]'
    return (
        <NavigationMenuContent className={`${className} ${CARD_BG}`}>
            <div className="flex md:flex-col lg:flex-row items-stretch justify-stretch gap-3 p-4 md:w-[620px] lg:w-[800px]">
                <div className="md:w-full lg:w-[30%]">
                    <NavigationMenuLink asChild>
                        <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-t from-muted/30 to-muted p-6 no-underline outline-none focus:shadow-md" href="/" >
                            <span>{FEATURED_CARD.svg}</span>
                            <div className="mb-2 mt-4 text-2xl font-semibold">{FEATURED_CARD.title}</div>
                            <p className="text-sm leading-tight text-muted-foreground">{FEATURED_CARD.desc}</p>
                        </a>
                    </NavigationMenuLink>
                </div>
                <div className="flex flex-wrap gap-2 justify-between md:w-full lg:w-[70%]">
                    {TRAY_DATA.map(data => (
                        <HoverCard key={data.title} openDelay={100} closeDelay={50}>
                            <HoverCardTrigger onClick={()=>alert("EF")} asChild>
                                <div className="w-[49%] cursor-pointer" key={data.title}>
                                    <a className={cn("flex gap-4 items-center select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")} >
                                        <span className="px-1">K</span>
                                        <div className="">
                                            <div className="text-[16px] font-medium leading-none mb-1">{data.title}</div>
                                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground"> {data.desc} </p>
                                        </div>
                                    </a>
                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent side="right" sideOffset={8} className={`w-[360px] lg:w-[480px] grid grid-cols-2 lg:grid-cols-3 gap-2 bg-[#fff8] dark:bg-[#0008] backdrop-blur-sm  shadow-lg border-none text-sm`}>
                                {data.sublist.map(sublist => (
                                    <Link className="p-2 hover:bg-accent flex items-center justify-start gap-[6px]" href={sublist.href} key={sublist.href}> {sublist.svg} <span>{sublist.name}</span> </Link>
                                ))}
                            </HoverCardContent>
                        </HoverCard>
                    ))}
                </div>
            </div>
        </NavigationMenuContent>
    )
}
