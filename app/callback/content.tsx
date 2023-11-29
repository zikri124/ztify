'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { setCookie } from "../../utils/cookies"

const Content = ({ data }: any) => {
    const refreshTokenExpire = 30 * 24 * 60 * 60
    const router = useRouter()

    useEffect(() => {
        setCookie("access_token", data.access_token, data.expires_in)
        setCookie("refresh_token", data.refresh_token, refreshTokenExpire)

        setTimeout(() => {
            router.push("/")
        }, 500)
    }, [])

    return (
        <>
            Loading...
        </>
    )
}

export default Content
