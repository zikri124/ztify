'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { homeIconSrcs, libraryIconSrcs, searchIconSrcs } from "./icon-src-lib"

const NavbarMobile = () => {
    const pathName = usePathname()

    return (
        <>
            <div className="grid grid-cols-3 justify-items-center gap-2 py-2 bg-gradient-to-b from-transparent to-black">
                <Link href={'/'} className="flex flex-col items-center gap-1">
                    <Image className="invert" alt="home-logo" width={28} height={28} src={pathName == "/" ? homeIconSrcs.filled : homeIconSrcs.outline} />
                    <p className="text-sm text-secondary text-white">Home</p>
                </Link>
                <Link href={'/search'} className="flex flex-col items-center gap-1">
                    <Image className="invert" alt="search-logo" width={28} height={28} src={pathName == "/search" ? searchIconSrcs.filled : searchIconSrcs.outline} />
                    <p className="text-sm text-secondary text-white">Search</p>
                </Link>
                <Link href={'/library'} className="flex flex-col items-center gap-1">
                    <Image className="invert" width="28" height="28" src={pathName == "/library" ? libraryIconSrcs.filled : libraryIconSrcs.outline} alt="music-library"/>
                    <p className="text-sm text-secondary text-white">Your Library</p>
                    
                </Link>
            </div>
        </>
    )
}

export default NavbarMobile
