import { User } from "@/app/types/user"
import { LogOut } from "@/app/utils/auth"
import fetchUserData from "@/app/utils/spotify/fetch-user-data"

const Header = async ({ isMobile }: { isMobile: boolean }) => {
    const data: User = await fetchUserData()
    console.log(data)

    const ButtonLogout = () => {
        'use client'

        return (
            <>
                <form action={LogOut}>
                    <button type="submit">Logout</button>
                </form>
            </>
        )
    }

    return (
        <>
            <div className='flex justify-between items-center w-full'>
                <h3 className='text-2xl font-bold'>Ztify</h3>
                
                <ButtonLogout />
            </div>
        </>
    )
}

export default Header
