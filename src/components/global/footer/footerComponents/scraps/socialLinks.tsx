import { Popover, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { SocialLinkPopover } from "../scraps/socialLinkPopups"
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

export function SocialLinkRow() {
    return (
        <div className="flex gap-4 items-center justify-start mt-1 md:mt-0">
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="ghost" className="hover:bg-transparent p-0"><GitHubLogoIcon className="h-[18px] w-[18px] md:size-4 text-dusk-light-active dark:text-dusk-dark-inactive hover:dark:text-dusk-dark-active " /></Button>
                </PopoverTrigger>
                <SocialLinkPopover type="github" />
            </Popover>

            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="ghost" className="hover:bg-transparent p-0"><LinkedInLogoIcon className="h-[18px] w-[18px] md:size-4 text-dusk-light-active dark:text-dusk-dark-inactive hover:dark:text-dusk-dark-active " /></Button>
                </PopoverTrigger>
                <SocialLinkPopover type="linkedin" />
            </Popover>

            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="ghost" className="hover:bg-transparent p-0"><InstagramLogoIcon className="h-[18px] w-[18px] md:size-4 text-dusk-light-active dark:text-dusk-dark-inactive hover:dark:text-dusk-dark-active " /></Button>
                </PopoverTrigger>
                <SocialLinkPopover type="instagram" />
            </Popover>
        </div>
    )
}