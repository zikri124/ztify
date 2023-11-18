'use server'
import { NextRequest, NextResponse } from "next/server";
import parseToFormBody from "@/app/utils/parse-to-form-body";

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET

export async function GET(request: NextRequest) {
    const refreshToken = request.cookies.get("refresh_token")

    if (refreshToken?.value === null) {
        return NextResponse.redirect('/#error=refresh_token_not_found')
    }

    const body: BodyReq = {
        grant_type: 'refresh_token',
        refresh_token: refreshToken?.value!
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

    const responseApi = NextResponse.json({ success: true })
    if (!data.error) {
        responseApi.cookies.set("access_token", data.access_token, {
            httpOnly: true,
            maxAge: data.expires_in
        })
    } else {
        console.log(data)
    }

    return responseApi
}
