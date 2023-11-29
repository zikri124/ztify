import { BiggestHits } from "@/types/biggest-hits"
import { cookies } from "next/headers"

const fetchBiggestHits = async () => {
    const accessToken = cookies().get("access_token")
    const token = `Bearer ${accessToken?.value}`
    
    const response = await fetch("https://api.spotify.com/v1/browse/featured-playlists?country=ID", {
        method: "GET",
        headers: {
            Authorization: token
        }
    })

    const data: BiggestHits = await response.json()

    return data
}

export default fetchBiggestHits
