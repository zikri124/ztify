import Link from "next/link"

const Footer = () => {
    return (
        <>
            <div className="bg-neutral-800 w-full p-4 text-center rounded-lg mt-8 text-sm">
                Created with &#10084; by <Link href={"https://zikri.vercel.app"} target='_blank' rel="noopener noreferrer"><b>Zikri</b></Link>
            </div>
        </>
    )
}

export default Footer
