"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, } from "@/components/ui/navigation-menu"
import { ClassNameType } from "@/utils/types"
import { contextMenuShade, headerIconShade } from "@/utils/shades"
import { MenuTrayHoverContent } from "../global/header/headerComponents/scraps/menuTrayHover"

const components: { title: string; href: string; description: string }[] = [
	{
		title: "Alert Dialog",
		href: "/docs/primitives/alert-dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Hover Card",
		href: "/docs/primitives/hover-card",
		description:
			"For sighted users to preview content available behind a link.",
	},
	{
		title: "Progress",
		href: "/docs/primitives/progress",
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
	},
	{
		title: "Scroll-area",
		href: "/docs/primitives/scroll-area",
		description: "Visually or semantically separates content.",
	},
	{
		title: "Tabs",
		href: "/docs/primitives/tabs",
		description:
			"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
	},
	{
		title: "Tooltip",
		href: "/docs/primitives/tooltip",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
	},
]

export function LeftMenuBar({ className }: { className?: ClassNameType }) {
	return (
		<NavigationMenu className={` ${className}`}>
			<NavigationMenuList className="gap-6">

				{/* MEN ======================================= */}
				<NavigationMenuItem>
					<NavigationMenuTrigger className={`font-normal ${headerIconShade}`}>Men</NavigationMenuTrigger>
					<MenuTrayHoverContent type="men" />
				</NavigationMenuItem>


				{/* WOMEN ===================================== */}
				<NavigationMenuItem>
					<NavigationMenuTrigger className={`font-normal ${headerIconShade}`}>Women</NavigationMenuTrigger>
					<MenuTrayHoverContent type="women" />
				</NavigationMenuItem>


				{/* KIDS ======================================= */}
				<NavigationMenuItem>
					<NavigationMenuTrigger className={`font-normal ${headerIconShade}`}>Kids</NavigationMenuTrigger>
					<MenuTrayHoverContent type="kid"/>
				</NavigationMenuItem>

			</NavigationMenuList>
		</NavigationMenu>
	)
}




const MainHeaderListLeftHeaderItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})

MainHeaderListLeftHeaderItem.displayName = "MainHeaderListLeftHeaderItem"