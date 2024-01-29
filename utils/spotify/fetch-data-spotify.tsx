import { cookies } from "next/headers"

export const FetchDataSpotify = async (path: string) => {
    const accessToken = cookies().get("access_token")
    const token = `Bearer ${accessToken?.value}`
    
    const response = await fetch(`https://api.spotify.com/v1/${path}`, {
        method: "GET",
        headers: {
            Authorization: token
        }
    })

    const data = await response.json()

    return data
}
