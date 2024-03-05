import { PopoverContent } from "@/components/ui/popover"
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AvatarIcon } from "@/components/shadcn/avatar"

const socialIcon = {
    github: {
        rudra: 'https://github.com/rudrakumarmishraa.png',
        kushal: 'https://github.com/bcd-kushal.png'
    },
    insta: {
        rudra: 'https://instagram.fknu1-5.fna.fbcdn.net/v/t51.2885-19/411929230_235169869601213_603155322581719435_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fknu1-5.fna.fbcdn.net&_nc_cat=105&_nc_ohc=K0yxWwjCzdsAX9zQqgm&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA0Kn0kCoF9poQ2nvPtgE1qhUbDWGS8TdT8onhlXramwg&oe=65EB75A1&_nc_sid=8b3546',
        kushal: 'https://instagram.fknu1-1.fna.fbcdn.net/v/t51.2885-19/310204374_1052138825474341_1383154916210828633_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fknu1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=4qTzXs_B-_wAX89j34F&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBBq14DJYM32k7NXCFfoNohK5K1_SttcUpUB72f_B4YcQ&oe=65ECD4F2&_nc_sid=8b3546'
    },
    linkedin: {
        rudra: 'https://media.licdn.com/dms/image/D4D03AQGdwoXDpnXuYA/profile-displayphoto-shrink_400_400/0/1707932860858?e=1715212800&v=beta&t=Ooz_7T4JVEdTFpkXKdmQCkba0qeMg0LOK2nzcQ9k8mA',
        kushal: 'https://media.licdn.com/dms/image/D5603AQEnzyb_9VeFqw/profile-displayphoto-shrink_400_400/0/1703170756039?e=1715212800&v=beta&t=wVd_6YTkK9Eoi-UsdAfUZS0p2i7n6rT8XijT1oPoavw'
    }
}

export function SocialLinkPopover( { type }: { type: 'github' | 'instagram' | 'linkedin' } ) {
    const socialLinkIcon = type==='github'?<GitHubLogoIcon/>:type==='instagram'?<InstagramLogoIcon/>:<LinkedInLogoIcon/>
    const socialName = type==='github'?'GitHub':type==='instagram'?'Instagram':'LinkedIn'
    const socialLink = {
        rudra:  type==='github'?'https://github.com/rudrakumarmishraa'  :type==='instagram'?'https://instagram.com/dev.rudrakumarmishra':'https://linkedin.com/in/dev-kushal/',
        kushal: type==='github'?'https://github.com/bcd-kushal'         :type==='instagram'?'https://instagram.com/dev.kushalkumar'     :'https://linkedin.com/in/rudrakumarmishraa'
    }
    const socialLinkAvatar = {
        rudra:  type==='github'?socialIcon.github.rudra :type==='instagram'?socialIcon.insta.rudra  :socialIcon.linkedin.rudra,
        kushal: type==='github'?socialIcon.github.kushal:type==='instagram'?socialIcon.insta.kushal :socialIcon.linkedin.kushal
    }
    return (
        <PopoverContent className="w-80 py-5 backdrop-blur-md bg-glass dark:bg-glass-dark border-none dark:border-none shadow-md dark:shadow-lg">
            <div className="grid gap-4">
                <div className="space-y-2">
                    <h4 className="font-medium leading-none flex gap-3 justify-center items-center">{socialLinkIcon}{socialName}</h4>
                    <p className="text-sm text-muted-foreground text-center">Follow the devs of ShopSphere on {socialName}</p>
                </div>
                <div className="flex gap-3 w-full items-center">
                    <Link href={socialLink.rudra} target="_blank"  className="w-[100%]" passHref><Button  className="flex gap-3 items-center justify-center w-[100%] bg-transparent text-[#121212] hover:bg-[#4C4B4D99] hover:text-white  dark:hover:bg-white dark:hover:text-black dark:text-white border-[0.1px] border-[#93919440] dark:border-[#fff3] shadow-sm">
                        <AvatarIcon className="w-6 h-6" avatarLink={socialLinkAvatar.rudra} imgAlt="/rudrakumarmishraa" fallback="R"/>
                        Rudra</Button>
                    </Link>
                    <Link href={socialLink.kushal} target="_blank"  className="w-[100%]" passHref><Button  className="flex gap-3 items-center justify-center w-[100%] bg-transparent text-[#121212] hover:bg-[#4C4B4D99] hover:text-white  dark:hover:bg-white dark:hover:text-black dark:text-white border-[0.1px] border-[#93919440] dark:border-[#fff3] shadow-sm">
                        <AvatarIcon className="w-6 h-6" avatarLink={socialLinkAvatar.kushal} imgAlt="/bcd-kushal" fallback="K"/>
                        Kushal</Button>
                    </Link>
                </div>
            </div>
        </PopoverContent>
    )
}