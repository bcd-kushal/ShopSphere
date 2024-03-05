import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"

interface AvatarProps{ avatarLink:string, imgAlt:string, fallback:string, className?:string }

export function AvatarIcon({ avatarLink, imgAlt, fallback, className }: AvatarProps) {
    return (
        <Avatar className={` ${className}`}>
            <AvatarImage src={avatarLink} alt={imgAlt} />
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    )
}
