import dynamic from "next/dynamic"
import { BackButton } from "./back-button"
import { Skeleton } from "../ui/skeleton"
import { Suspense } from "react"

const Header = async () => {

    return (
        <>
            <div className='flex justify-between items-center w-full px-4 py-4 border-b-2'>
                <div className="flex gap-2 items-center">
                    <BackButton />
                </div>
                <Suspense fallback={<Skeleton className='h-12 w-12 rounded-full' />}>
                    <DropdownUserMenu />
                </Suspense>
            </div>
        </>
    )
}

const DropdownUserMenu = dynamic(
    () => import('../header/dropdown-user-menu'),
    {
        loading: () => <Skeleton className='h-12 w-12 rounded-full' />
    })

export default Header
