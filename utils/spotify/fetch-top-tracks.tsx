import { TopTracks } from "@/types/top-tracks"
import { cookies } from "next/headers"

const fetchTopTracks = async () => {
    const accessToken = cookies().get("access_token")
    const token = `Bearer ${accessToken?.value}`
    
    const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
        method: "GET",
        headers: {
            Authorization: token
        }
    })

    const data: TopTracks = await response.json()

    return data
}

export default fetchTopTracks
