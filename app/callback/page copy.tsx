'use client'

import { useEffect, useState } from "react"
import { redirect } from "next/navigation"

const LoginCallback = () => {
    const [token, setToken] = useState<string | null>()

    const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
    const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
    const REDIRECT_URI = "http://localhost:3000/callback"

    const saveToken = async (token: string) => {
        const body = {
            name: "access_token",
            value: token
        }

        const response = await fetch("/api/header-cookie", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const responseJson = await response.json()
        console.log(responseJson)
    }

    const getToken = async () => {
        const response = await fetch("/api/header-cookie", {
            method: "GET",
            body: JSON.stringify({ name: "auth_token" })
        })

        const data = await response.json()
        console.log(data)
        return data
    }

    const getAccessToken = async (authCode: string, state: string) => {
        const body = {
            code: authCode,
            state: state
        }

        const response = await fetch(`/api/spotify-token?code=${authCode}&state=${state}`)

        const data = response.json()

        return data
    }

    useEffect(() => {
        const query = window.location.search
        const queryItems = query.substring(1).split("&")
        const state = queryItems.find(elem => elem.startsWith("state"))!.split("=")[1] || null

        if (state === null) {
            redirect(`/#error=state_mismatch`)
        }

        const token = query.substring(1).split("&").find(elem => elem.startsWith("code"))!.split("=")[1]

        window.location.hash = ""

        setToken(token)

        const tokens = getAccessToken(token, state)

        console.log(tokens)
    }, [])

    return (
        <>
            Loading...
        </>
    )
}

export default LoginCallback
