import ArtistRelated from "@/types/artist/artist-related"
import { cookies } from "next/headers"

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

        return {data: data, error: null}
    } catch (err) {
        console.log(err)
        return {data: null, error: err}
    }
}