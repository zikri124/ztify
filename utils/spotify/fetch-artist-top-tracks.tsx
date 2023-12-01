import ArtistTopTracks from "@/types/artist/artist-top-tracks"
import { cookies } from "next/headers"

export const FetchArtistTopTracks = async (artistId: string) => {
    const accessToken = cookies().get("access_token")
    const token = `Bearer ${accessToken?.value}`
    
    const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=ID`, {
        method: "GET",
        headers: {
            Authorization: token
        }
    })

    const data: ArtistTopTracks = await response.json()

    return data
}