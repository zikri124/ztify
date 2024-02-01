import Link from "next/link"

const Footer = () => {
    return (
        <>
            <div className="bg-container md:bg-neutral-800 w-full p-0 md:p-4 text-center rounded-lg mt-4 md:mt-8 mb-16 md:mb-0 text-sm">
                Created with &#10084; by <Link href={"https://zikri.vercel.app"} target='_blank' rel="noopener noreferrer"><b>Zikri</b></Link>
            </div>
        </>
    )
}

export default Footer
