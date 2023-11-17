'use client'

import { useEffect } from "react"
import { redirect, useSearchParams } from "next/navigation"

interface Body {
    [key: string]: string
}

const LoginCallback = () => {
    const REDIRECT_URI = "http://localhost:3000/callback"

    const searchParams = useSearchParams()

    const getFormBodyString = (body: Body): string => {
        let formBody = []
        for (let property in body) {
            let encodedKey = encodeURIComponent(property)
            let encodedValue = encodeURIComponent(body[property])
            formBody.push(`${encodedKey}=${encodedValue}`)
        }
        const formBodyString = formBody.join("&")

        return formBodyString
    }

    // const getToken = async () => {
    //     const body: Body = {
    //         code: searchParams.get("code")!,
    //         redirect_uri: REDIRECT_URI,
    //         grant_type: "authorization_code"
    //     }
        
    //     const response = await fetch("https://accounts.spotify.com/api/token", {
    //         method: "POST",
    //         body: getFormBodyString(body),
    //         headers: {
    //             'content-type': 'application/x-www-form-urlencoded',
    //             'Authorization': 'Basic ' + (Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
    //         }
    //     })

    //     const data = await response.json()

    //     return response.ok
    // }

    const getAccessToken = async (code: string, state: string) => {
        const response = await fetch(`/api/spotify-token?code=${code}&state=${state}`)

        const data = await response.json()

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
        // window.location.search = ""

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
