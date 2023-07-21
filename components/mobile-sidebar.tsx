'use client'

import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Sidebar from "./sidebar"
import { useEffect, useState } from "react"

const MobileSidebar = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [mounted])

    if(!mounted) return null
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon/>
                </Button>
            </SheetTrigger>
            <SheetContent className="p-0" side="left">
                <Sidebar/>
            </SheetContent>
        </Sheet>
            
 
        
    )
}

export default MobileSidebar