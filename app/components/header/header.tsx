import Link from "next/link"
import LoginButton from "./login-button"
import { useState } from "react"

const Header = ({ isMobile }: { isMobile: boolean }) => {
    const [ isLogin, setIsLogin ] = useState<boolean>(false)
    
    const fetchLoginInfo = async () => {
        return true
    }

    return (
        <>
            <div className='flex justify-between items-center w-full'>
                <h3 className='text-2xl font-bold'>Hello</h3>
                {isLogin ? (
                    <p>
                        User
                    </p>
                ) : (
                    <LoginButton />
                )}

            </div>
        </>
    )
}

export default Header
