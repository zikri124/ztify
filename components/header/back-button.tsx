'use client'

import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import { Link } from "lucide-react"
import { Button } from "../ui/button"

export const BackButton = () => {
    const pathName = usePathname()
    const router = useRouter()
    
    return (
        <div>
            {(pathName != "/")? (
                <Button variant={"ghost"} onClick={() => router.back()} className="flex gap-2 ps-0 pe-1">
                    <Image width="20" height="20" src="https://img.icons8.com/ios/50/back--v1.png" alt="back--v1" className="invert px-0" />
                    <h3 className='text-2xl font-bold'>ZTIFY</h3>
                </Button>
            ):(
                <h3 className='text-2xl font-bold'>ZTIFY</h3>
            )}
        </div>
    )
}