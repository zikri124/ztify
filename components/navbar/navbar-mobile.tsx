import Link from "next/link"

const NavbarMobile = () => {
    return (
        <>
            <div className="grid grid-cols-3 justify-items-center gap-2 py-2">
                <Link href={'/'} className="flex flex-col items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0,0,256,256">
                        <g className="fill-secondary" fillRule="nonzero" stroke="none" strokeWidth={"1"} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={"10"} strokeDasharray={""} strokeDashoffset={"0"} fontFamily="none" fontWeight={"none"} fontSize={"none"} textAnchor="none"><g transform="scale(5.33333,5.33333)"><path d="M23.95117,4c-0.31984,0.01092 -0.62781,0.12384 -0.87891,0.32227l-14.21289,11.19727c-1.8039,1.42163 -2.85937,3.59398 -2.85937,5.89063v19.08984c0,1.36359 1.13641,2.5 2.5,2.5h10c1.36359,0 2.5,-1.13641 2.5,-2.5v-10c0,-0.29504 0.20496,-0.5 0.5,-0.5h5c0.29504,0 0.5,0.20496 0.5,0.5v10c0,1.36359 1.13641,2.5 2.5,2.5h10c1.36359,0 2.5,-1.13641 2.5,-2.5v-19.08984c0,-2.29665 -1.05548,-4.46899 -2.85937,-5.89062l-14.21289,-11.19727c-0.27738,-0.21912 -0.62324,-0.33326 -0.97656,-0.32227zM24,7.41016l13.28516,10.4668c1.0841,0.85437 1.71484,2.15385 1.71484,3.5332v18.58984h-9v-9.5c0,-1.91495 -1.58505,-3.5 -3.5,-3.5h-5c-1.91495,0 -3.5,1.58505 -3.5,3.5v9.5h-9v-18.58984c0,-1.37935 0.63074,-2.67883 1.71484,-3.5332z"></path></g></g>
                    </svg>
                    <p className="text-sm text-secondary">Home</p>
                </Link>
                <Link href={'/search'} className="flex flex-col items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0,0,256,256">
                        <g className="fill-secondary" fillRule="nonzero" stroke="none" strokeWidth={"1"} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={"10"} strokeDasharray={""} strokeDashoffset={"0"} fontFamily="none" fontWeight={"none"} fontSize={"none"} textAnchor="none"><g transform="scale(5.33333,5.33333)"><path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"></path></g></g>
                    </svg>
                    <p className="text-sm text-secondary">Search</p>
                </Link>
                <Link href={'/your-library'} className="flex flex-col items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0,0,256,256">
                        <g className="fill-secondary" fillRule="nonzero" stroke="none" strokeWidth={"1"} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={"10"} strokeDasharray={""} strokeDashoffset={"0"} fontFamily="none" fontWeight={"none"} fontSize={"none"} textAnchor="none"><g transform="scale(5.33333,5.33333)"><path d="M 5.5 9 A 1.50015 1.50015 0 1 0 5.5 12 L 42.5 12 A 1.50015 1.50015 0 1 0 42.5 9 L 5.5 9 z M 5.5 22.5 A 1.50015 1.50015 0 1 0 5.5 25.5 L 42.5 25.5 A 1.50015 1.50015 0 1 0 42.5 22.5 L 5.5 22.5 z M 5.5 36 A 1.50015 1.50015 0 1 0 5.5 39 L 42.5 39 A 1.50015 1.50015 0 1 0 42.5 36 L 5.5 36 z"></path></g></g>
                    </svg>
                    <p className="text-sm text-secondary">Your Library</p>
                </Link>
            </div>
        </>
    )
}

export default NavbarMobile
