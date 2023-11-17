import NavbarMobile from "./navbar-mobile"
import NavbarDesktop from "./navbar-desktop"

const Navbar = ({ isMobile }: { isMobile: boolean }) => {
    return (
        <>
            {isMobile ? (
                <NavbarMobile />
            ) : (
                <NavbarDesktop />
            )}
        </>
    )
}

export default Navbar
