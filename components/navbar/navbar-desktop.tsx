'use client'
import Link from "next/link"
import Image from "next/image"
import { homeIconSrcs, searchIconSrcs, libraryIconSrcs } from "./icon-src-lib"
import { usePathname } from "next/navigation"

const NavbarDesktop = () => {
    const pathName = usePathname()

    return (
        <>
            <div className="h-screen p-1">
                <div className="bg-neutral-900 px-8 py-6 rounded-xl h-full">
                    <div className="grid grid-rows-3 gap-8">
                        <Link href={'/'} className="flex items-center gap-4 pe-4">
                            <Image className="invert" alt="home-logo" width={28} height={28} src={pathName == "/" ? homeIconSrcs.filled : homeIconSrcs.outline} />
                            <p className={pathName == "/" ? "font-bold text-secondary text-white" : "text-secondary text-white"}>Home</p>
                        </Link>
                        <Link href={'/search'} className="flex items-center gap-4 pe-4">
                            <Image className="invert" alt="search-logo" width={28} height={28} src={pathName == "/search" ? searchIconSrcs.filled : searchIconSrcs.outline} />
                            <p className={pathName == "/search" ? "font-bold text-secondary text-white" : "text-secondary text-white"}>Search</p>
                        </Link>
                        <Link href={'/library'} className="flex items-center gap-4 pe-4">
                            <Image className="invert" width="28" height="28" src={pathName == "/library" ? libraryIconSrcs.filled : libraryIconSrcs.outline} alt="music-library" />
                            <p className={pathName == "/library" ? "font-bold text-secondary text-white" : "text-secondary text-white"}>Your Library</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarDesktop
