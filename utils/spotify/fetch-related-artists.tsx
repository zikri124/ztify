import ArtistData from "@/types/artist/artist-data"
import { cookies } from "next/headers"

type ArtistRelated = {
    "artists": ArtistData[]
}

export const FetchRelatedArtist = async (artistId: string) => {
    const accessToken = cookies().get("access_token")
    const token = `Bearer ${accessToken?.value}`

    try {
        const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/related-artists`, {
            method: "GET",
            headers: {
                Authorization: token
            }
        })

        const data: ArtistRelated = await response.json()

        return {data: data.artists, error: null}
    } catch (err) {
        console.log(err)
        return {data: null, error: err}
    }
}