'use server'
import { NextResponse } from "next/server";
import getSearchParams from '@/app/utils/get-search-params';
import { setCookie } from "@/app/utils/cookies";

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
const REDIRECT_URI = "http://localhost:3000/api/spotify-token"

export async function GET(request: Request) {
    const url = request.url
    const code = getSearchParams(url, "code")
    const state = getSearchParams(url, "state")

    const refreshTokenExpire = 30 * 24 * 60 * 60 * 1000

    if (state === null) {
        return NextResponse.redirect('/#state_mismatch')
    } else if (code != null) {
        const body: BodyReq = {
            code: code,
            redirect_uri: REDIRECT_URI,
            grant_type: "authorization_code"
        }

        const getFormBodyString = (): string => {
            let formBody = []
            for (let property in body) {
                let encodedKey = encodeURIComponent(property)
                let encodedValue = encodeURIComponent(body[property])
                formBody.push(`${encodedKey}=${encodedValue}`)
            }
            const formBodyString = formBody.join("&")

            return formBodyString
        }

        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            body: getFormBodyString(),
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + (Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
            }
        })

        const data = await response.json()

        await setCookie("refresh_token", data.refresh_token, refreshTokenExpire)
        await setCookie("access_token", data.access_token, data.expires_in * 1000)

        // NextResponse.redirect(`/#access_token=${data.access_token}&refresh_token`)
        return NextResponse.json({ success: true })
    }
}
