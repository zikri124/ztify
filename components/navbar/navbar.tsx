'use client'
import NavbarMobile from "./navbar-mobile"
import NavbarDesktop from "./navbar-desktop"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const pathName = usePathname()

    return (
        <>
            {(pathName != "/auth") && (
                <div>
                    <div className="block md:hidden">
                        <NavbarMobile />
                    </div>
                    <div className="hidden md:block">
                        <NavbarDesktop />
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar
