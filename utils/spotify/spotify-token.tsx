import parseToFormBody from "../parse-to-form-body"

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
const REDIRECT_URI = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI

export async function getSpotifyToken(code: string | undefined, state: string | undefined) {
    if (state === null) {
        return new Error("state_mismatch")
    } else if (code != null) {
        const body: BodyReq = {
            code: code,
            redirect_uri: REDIRECT_URI!,
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

        if (data.error) {
            console.log(data)
        }

        return data
    }
}

export const getRefreshAccessToken = async (refreshToken: any) => {
    const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
    const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
    
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

    return data.access_token
}
