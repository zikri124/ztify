import ArtistData from "@/types/artist/artist-data"
import { cookies } from "next/headers"

export const FetchArtistMainData = async (artistId: string) => {
    const accessToken = cookies().get("access_token")
    const token = `Bearer ${accessToken?.value}`

    try {
        const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
            method: "GET",
            headers: {
                Authorization: token
            }
        })

        const data: ArtistData = await response.json()

        return {data: data, error: null}
    } catch (err) {
        console.log(err)
        return {data: null, error: err}
    }
}