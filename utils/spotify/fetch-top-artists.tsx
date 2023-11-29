import { TopArtists } from "@/types/top-artists"
import { cookies } from "next/headers"

const fetchTopArtists = async () => {
    const accessToken = cookies().get("access_token")
    const token = `Bearer ${accessToken?.value}`
    
    const response = await fetch("https://api.spotify.com/v1/me/top/artists", {
        method: "GET",
        headers: {
            Authorization: token
        }
    })

    const data: TopArtists = await response.json()

    return data
}

export default fetchTopArtists
