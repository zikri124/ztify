'use client'

import { useEffect } from "react"
import { redirect, useSearchParams } from "next/navigation"

const LoginCallback = () => {
    const searchParams = useSearchParams()

    const getAccessToken = async (code: string, state: string) => {
        const response = await fetch(`/api/spotify-token?code=${code}&state=${state}`)

        const data = await response.json()
        console.log({token: data})

        return data
    }

    useEffect(() => {
        const state = searchParams.get('state')

        if (state === null) {
            redirect(`/#error=state_mismatch`)
        }

        if (!searchParams.has('code')) {
            redirect(`/#error=auth_token_mismatch`)
        }
        
        const token = searchParams.get('code')!

        const tokens = getAccessToken(token, state)

        redirect('/')
    }, [])

    return (
        <>
            Loading...
        </>
    )
}

export default LoginCallback
