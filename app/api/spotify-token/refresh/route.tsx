'use server'
import { NextResponse } from "next/server";
import getSearchParams from '@/app/utils/get-search-params';
import { getCookie, setCookie } from "@/app/utils/cookies";
import parseToFormBody from "@/app/utils/parse-to-form-body";

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET

export async function GET(request: Request) {
    const refreshToken = getCookie("refresh_token")
    
    if (refreshToken === null) {
        return NextResponse.redirect('/#error=refresh_token_not_found')
    }

    const body: BodyReq = {
        grant_type: 'refresh_token',
        refresh_token: refreshToken.value
    }

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
        },
        body: parseToFormBody(body)
    })

    const data = await response.json()

    setCookie("access_token", data.access_token, data.expires_in * 1000)

    return NextResponse.json({ success: true })
}