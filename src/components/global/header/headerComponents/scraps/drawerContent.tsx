
import { DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { contextMenuShade, subContextMenuShade } from "@/utils/shades"


export function WishlistDrawerContent() {

    return (
        <DrawerContent className="bg-background dark:bg-background-dark max-w-[1600px]">
            <DrawerHeader className="p-8 flex flex-col md:text-center">
                <DrawerTitle className="font-bold text-3xl ">My Wishlist</DrawerTitle>
                <DrawerDescription className="text-xs">Products saved with heart appear here</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
                some data
            </div>
            <DrawerFooter className="p-8 flex flex-col md:text-center">
                <Button>Submit</Button>
                <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    )
}



export function ShoppingBagDrawerContent() {

    return (
        <DrawerContent className="bg-background dark:bg-background-dark">
            <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                    <DrawerTitle>Move Goal</DrawerTitle>
                    <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0">
                    some data
                </div>
                <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </div>
        </DrawerContent>
    )
}