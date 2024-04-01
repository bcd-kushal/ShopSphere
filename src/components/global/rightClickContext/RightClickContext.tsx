import { ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger } from "@/components/ui/context-menu"
import { BeautyIcon, HomeLivingIcon, KidsIcon, MenIcon, SportFlagIcon, WomenIcon } from "@/svgs/svgs"
import { contextMenuShade, subContextMenuShade } from "@/utils/shades"
import { CodeSandboxLogoIcon, GearIcon, HeartIcon, LockClosedIcon, MagnifyingGlassIcon, PaperPlaneIcon, ReloadIcon, RocketIcon } from "@radix-ui/react-icons"
import { AvatarIcon } from "../../shadcn/avatar"
import ThemeButton from "../theme/ThemeToggle"
import { ThemeType } from "@/utils/types"
import { RightClickBackButton, RightClickForwardButton, RightClickReloadButton, RightClickSearchButton } from "./ContextComponents"

export function ContextMenuPopupList({theme}:{theme:ThemeType}) {
	/* RIGHT CLICK ACTION MENU ===================================  */
	return (
		<ContextMenuContent className={`w-64 overflow-visible ${contextMenuShade}`}>

			<ContextMenuItem className="hover:bg-transparent flex justify-between items-center focus:bg-transparent h-10">
				<RightClickBackButton/>
				<RightClickSearchButton/>
				<ThemeButton theme={theme} className="hover:bg-[#A8A6A860] hover:dark:bg-dusk-dark-800 px-1 py-[5.5px] w-7 h-[100%] aspect-square rounded cursor-pointer flex items-center justify-center"/>
				<RightClickReloadButton/>
				<RightClickForwardButton/>
			</ContextMenuItem>

			<ContextMenuSeparator/>

			<ContextMenuCheckboxItem>
				Wishlist
				<ContextMenuShortcut><HeartIcon/></ContextMenuShortcut>
			</ContextMenuCheckboxItem>
			
			<ContextMenuCheckboxItem>
				Shopping bag
				<ContextMenuShortcut><LockClosedIcon/></ContextMenuShortcut>
			</ContextMenuCheckboxItem>
			
			<ContextMenuCheckboxItem>
				Settings
				<ContextMenuShortcut><GearIcon/></ContextMenuShortcut>
			</ContextMenuCheckboxItem>
			
			<ContextMenuCheckboxItem>
				My orders
				<ContextMenuShortcut><CodeSandboxLogoIcon/></ContextMenuShortcut>
			</ContextMenuCheckboxItem>
			
			<ContextMenuCheckboxItem>
				Feedback
				<ContextMenuShortcut><PaperPlaneIcon/></ContextMenuShortcut>
			</ContextMenuCheckboxItem>
			
			<ContextMenuCheckboxItem>
				My account
				<ContextMenuShortcut><AvatarIcon className="h-4 w-4" avatarLink="https://github.com/bcd-kushal.png" fallback="K" imgAlt="/bcd-kushal"/></ContextMenuShortcut>
			</ContextMenuCheckboxItem>
			
			<ContextMenuCheckboxItem>
				Promotions and deals
				<ContextMenuShortcut><RocketIcon/></ContextMenuShortcut>
			</ContextMenuCheckboxItem>

			<ContextMenuSeparator />

			<ContextMenuSub>
				<ContextMenuSubTrigger inset>Shop by category</ContextMenuSubTrigger>
				<ContextMenuSubContent className={`w-48 overflow-visible shadow-lg ml-[-40px] ${subContextMenuShade}`}>
					<ContextMenuItem>
						Men
						<ContextMenuShortcut><MenIcon dimensions="15" /></ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						Women
						<ContextMenuShortcut><WomenIcon dimensions="15" /></ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						Kids
						<ContextMenuShortcut><KidsIcon dimensions="15" /></ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						Beauty
						<ContextMenuShortcut><BeautyIcon dimensions="15" /></ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						Home and living
						<ContextMenuShortcut><HomeLivingIcon dimensions="15" /></ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						Sports
						<ContextMenuShortcut><SportFlagIcon dimensions="15" /></ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuSeparator />
					<ContextMenuItem>Explore all</ContextMenuItem>
				</ContextMenuSubContent>
			</ContextMenuSub>


			<ContextMenuCheckboxItem>
				Promotions and deals
				<ContextMenuShortcut><RocketIcon/></ContextMenuShortcut>
			</ContextMenuCheckboxItem>
			
			<ContextMenuCheckboxItem>
				Promotions and deals
				<ContextMenuShortcut><RocketIcon/></ContextMenuShortcut>
			</ContextMenuCheckboxItem>



			<ContextMenuItem className="hover:bg-transparent flex justify-end gap-3 items-center focus:bg-transparent h-7 mt-3">
				<span className="text-[10px] italic text-dusk-light-300 dark:text-dusk-dark-700">© ShopSphere {new Date().getFullYear()}</span>
			</ContextMenuItem>


		</ContextMenuContent>
	)
}
