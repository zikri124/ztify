import NavbarMobile from "./navbar-mobile"
import NavbarDesktop from "./navbar-desktop"

const Navbar = () => {
    return (
        <>
            <div className="block md:hidden">
                <NavbarMobile />
            </div>
            <div className="hidden md:block">
                <NavbarDesktop />
            </div>
        </>
    )
}

export default Navbar
