import Link from "next/link"

const NavbarDesktop = () => {
    return (
        <>
            <div className="">
                <Link href={'#'}>Home</Link>
                <Link href={'#'}>Search</Link>
                <Link href={'#'}>Playlist</Link>
            </div>
        </>
    )
}

export default NavbarDesktop
