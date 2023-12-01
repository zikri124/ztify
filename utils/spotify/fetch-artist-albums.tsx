import ArtistAlbums from "@/types/artist/artist-albums"
import { cookies } from "next/headers"

export const FetchArtistAlbums = async (artistId: string) => {
    const accessToken = cookies().get("access_token")
    const token = `Bearer ${accessToken?.value}`
    
    const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=single%2Calbum&market=ID&limit=10&offset=0`, {
        method: "GET",
        headers: {
            Authorization: token
        }
    })

    const data: ArtistAlbums = await response.json()

    return data
}
