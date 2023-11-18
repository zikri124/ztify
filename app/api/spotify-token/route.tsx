'use server'
import { NextRequest, NextResponse } from "next/server"
import getSearchParams from '@/app/utils/get-search-params'
import parseToFormBody from "@/app/utils/parse-to-form-body"

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
const REDIRECT_URI = "http://localhost:3000/callback"

export async function GET(request: NextRequest) {
    const url = request.url
    const code = getSearchParams(url, "code")
    const state = getSearchParams(url, "state")

    const refreshTokenExpire = 30 * 24 * 60 * 60

    if (state === null) {
        return NextResponse.redirect('/#state_mismatch')
    } else if (code != null) {
        const body: BodyReq = {
            code: code,
            redirect_uri: REDIRECT_URI,
            grant_type: "authorization_code"
        }

        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            body: parseToFormBody(body),
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + (Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
            }
        })

        const data = await response.json()
        
        const responseApi = NextResponse.json({ success: true })
        if (!data.error) {
            responseApi.cookies.set("access_token", data.access_token, {
                httpOnly: true,
                maxAge: data.expires_in
            })
            responseApi.cookies.set("refresh_token", data.refresh_token, {
                httpOnly: true,
                maxAge: refreshTokenExpire
            })
        } else {
            console.log(data)
        }

        return responseApi
    }
}
