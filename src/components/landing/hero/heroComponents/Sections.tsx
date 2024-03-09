'use client'
import { useEffect, useState, useRef } from "react"
import { heroLandingDataSpacing } from "@/utils/spacings"
import { glassButton, primaryButton } from "@/utils/shades"
import { LeftArrow, Puma, RightArrow } from "@/svgs/svgs"
import { ThemeType } from "@/utils/types"
import { HeartIcon, PlusIcon } from "@radix-ui/react-icons"
import { LikeReviewTag, ProductColorOptionBubble, ReadMoreText, Tag } from "@/utils/ui/utilityComponents"
import { ProductOnLandingPageProps } from "@/utils/interfaces"

/*********************************************
**** HERO PAGE DATA AND TEXTS AND INTERACTIONS
**********************************************/

export function DataLandingSection({ theme, productData, shades }:{ theme:ThemeType, productData?:ProductOnLandingPageProps, shades:string[] }) {
    const svgShade = theme==='dark' ? '#fff' : '#222'
    return (
        <>
            {/*******************************
             ** SMALL DEVICE ****************
             ********************************/}
            <article id="_sm_landing_hero_image_data" className={`grid gap-x-2 gap-y-5 items-end h-fit self-end grid-cols-3 md:hidden row-start-1 col-start-1 z-10 max-h-screen overflow-y-scroll ${heroLandingDataSpacing}`} style={{gridTemplateColumns:"56px auto 56px"}}>
                
                {/* product name price brand etc. ------- */}
                <div className="col-span-2 flex flex-col justify-end gap-2 items-stretch">
                    {/*brand logo*/}    <span className="mb-[-2px]"><Puma fill={"#fff"} dimensions="35"/></span>
                    {/*product name*/}  <span className="text-4xl font-bold text-shadow-md">Checked Aviatar Shirt</span>
                    {/*price*/}         <span className="text-xl tracking-wider mb-2 mt-[-4px] text-shadow-md">₹899</span>
                    {/*relevant tags*/} <div className="flex justify-start items-center gap-[2.5px] flex-wrap">
                        <LikeReviewTag stars="4.3" likes={"34.6k"} theme={theme} />
                        <Tag text="Men Green Slim Fit Opaque Sustainable Casual Shirt" theme={theme}/>
                        </div>
                    {/*read more*/}     <div className="text-xs pr-3 pl-1 mt-2 text-[#ddd]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet officiis quo mollitia, enim vel at sed architecto, labore et voluptates <ReadMoreText/></div>
                </div>

                {/* colors, wishlist, bag ------- */}
                <div className="flex flex-col items-stretch justify-end">
                    {/* colors ribbon */}
                    <div className={`flex flex-col gap-5 p-2 items-center mb-2 py-5 ${glassButton}`}>
                        {shades.map( shade => ( <ProductColorOptionBubble style={{background:shade}} key={shade}/> ))}
                    </div>
                    {/* shopping bag + wishlist */}
                    <div className="grid place-items-center p-2 h-12 my-2"><HeartIcon width={20} height={20}/></div>
                    <div className="grid place-items-center p-2 h-12 mb-2"><PlusIcon width={20} height={20}/></div>
                </div>

                {/* bottom row --------------------------- */}
                <div className={`h-14 ${glassButton}`}><LeftArrow fill={theme==='dark'?'#ddd':'#444'}/></div>
                <div className={`h-14 ${primaryButton}`}>Shop</div>
                <div className={`h-14 ${glassButton}`}><RightArrow fill={theme==='dark'?'#ddd':'#444'}/></div>

            </article>



            {/*******************************
             ** LARGE DEVICE ****************
             ********************************/}
            <article id="_md_landing_hero_image_data" className={`hidden md:grid row-start-1 col-start-1 z-10 max-h-screen overflow-y-scroll ${heroLandingDataSpacing}`}>
                Large device
            </article>
        </>
        
    )
}



/*********************************************
**** HERO PAGE IMAGES OF PRODUCTS
**********************************************/
interface ImageCardProps { closeAfter:number, shuttingSpeed:number, products:string[], startIndex:number }

export function ImageLandingSection({ closeAfter, shuttingSpeed, products, startIndex }:ImageCardProps) {

    const PRODUCT_OPEN_TIME_PERIOD              = (closeAfter <= 0 ? 5*1000 : closeAfter*1000) || 5*1000
    const PRODUCT_CLOSE_TIME_PERIOD             = (shuttingSpeed <= 0 ? 1.7*1000 : shuttingSpeed*1000) || 1.7*1000
    const [ door, setDoor ]                     = useState({x:0,y:0})
    const [ isCardOpen, setIsCardOpen ]         = useState(false)
    const [ productOpacity, setProductOpacity ] = useState(1)
    const [ currImgIndex, setCurrImgIndex ]     = useState((startIndex < 0 ? 0 : parseInt(String(startIndex))) || 0)

    useEffect(()=>{

        /*** collapse card *****/
        if(isCardOpen){
            const openInterval = setInterval(() => {
                setDoor(prev=>({...prev,x:0}))                  // close door
                setProductOpacity(prev=>0.5)                    // fade out image
                setIsCardOpen(prev=>!prev)                      // trigger switch
                setTimeout(()=>setCurrImgIndex(prev=>(prev+1)%(products?products.length:1)),PRODUCT_CLOSE_TIME_PERIOD-300)
                // ^ switch to next image after the door has been totally shut off
            }, PRODUCT_OPEN_TIME_PERIOD )
    
            return ()=>clearInterval(openInterval)
        }
        /*** reveal card *****/
        else {
            const closeInterval = setInterval(() => {
                const SCREEN_WIDTH = window.innerWidth
                setDoor(prev=>({...prev,x:(SCREEN_WIDTH/2)}))   // entirely open the door respective to screen width
                setProductOpacity(prev=>1)                      // totally show the product
                setIsCardOpen(prev=>!prev)                      // trigger switch
            }, PRODUCT_CLOSE_TIME_PERIOD )
    
            return ()=>clearInterval(closeInterval)
        }
        
    },[isCardOpen])

    return (
        <article id="_landing_hero_image" className="row-start-1 col-start-1 grid overflow-hidden">
            <div className="row-start-1 col-start-1 flex justify-center items-stretch">
                {/* the image to show is put inside this div */}
                <div className="w-[100%] bg-transparent overflow-hidden flex items-end justify-center"><img src={`products/${products?products[currImgIndex]:"man.png"}`} className="w-auto h-[71%] md:w-[420px] md:h-auto scale-[1.5] duration-500" style={{opacity:String(productOpacity)}} alt="a dude" /></div>
            </div>
            <div className="row-start-1 col-start-1 flex justify-center items-stretch">
                {/* these are the 2 flapping cards that overlay the
                 * image as the image transitions to the next one */}
                <div  className="w-[50%] bg-background dark:bg-background-dark transition-transform duration-500" style={{transform:`translateX(${-1*door.x}px)`}}></div>
                <div  className="w-[50%] bg-background dark:bg-background-dark transition-transform duration-500" style={{transform:`translateX(${door.x}px)`}}></div>
            </div>
        </article>
    )
}