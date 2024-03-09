import React from "react"
import { productColorOptionBubble } from "../shades"
import { ThemeType } from "../types"
import { HeartIcon } from "@radix-ui/react-icons"
import { HeaertIcon, StarIcon } from "@/svgs/svgs"


export function ReadMoreText() { return (<span className="text-[#ffffff80]">read more...</span>) }


interface ProductColorOptionBubbleProps { style: React.CSSProperties }
export function ProductColorOptionBubble({ style }: ProductColorOptionBubbleProps) { return (<span className={productColorOptionBubble} style={{ background: style.background }}></span>) }


interface TagProps { shade?: { light: string, dark: string }, text: string, theme: ThemeType }
export function Tag({ shade, text, theme }: TagProps) { return (<span className={`rounded-full p-1 px-3 text-[10px] flex gap-1`} style={{ background: theme === 'light' ? (shade?.light || "#000") : (shade?.dark || "#fff"), color: theme === 'light' ? (shade?.light || "#fff") : (shade?.dark || "#000") }}>{text}</span>) }


interface LikeReviewTagProps { shade?: { light: string, dark: string }, stars: string | number, theme: ThemeType, likes?: number | string }
export function LikeReviewTag({ shade, likes, stars, theme }: LikeReviewTagProps) {
    return (
        <span className="flex gap-[2.5px] items-center justify-center">
            <span className={`rounded-ss-full rounded-es-full p-1 pl-3 pr-2 text-[10px] flex gap-1`} style={{ background: theme === 'light' ? (shade?.light || "#000") : (shade?.dark || "#fff"), color: theme === 'light' ? (shade?.light || "#fff") : (shade?.dark || "#000") }}>
                <StarIcon dimensions="10" className="pt-[2.5px] scale-[1.3]"/> {stars}
            </span>
            <span className={`rounded-se-full rounded-ee-full p-1 pr-3 pl-2 text-[10px] flex gap-1`} style={{ background: theme === 'light' ? (shade?.light || "#000") : (shade?.dark || "#fff"), color: theme === 'light' ? (shade?.light || "#fff") : (shade?.dark || "#000") }}>
                <HeaertIcon dimensions="10" className="pt-[2.5px] scale-[1.3]"/> {likes}
            </span>
        </span>
    )
}


