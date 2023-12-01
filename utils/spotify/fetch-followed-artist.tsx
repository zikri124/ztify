import { FollowedArtist } from "@/types/followed-artist"
import { cookies } from "next/headers"

export const FetchFollowedArtist = async () => {
    const accessToken = cookies().get("access_token")
    const token = `Bearer ${accessToken?.value}`

    try {
        const response = await fetch(`https://api.spotify.com/v1/me/following?type=artist`, {
            method: "GET",
            headers: {
                Authorization: token
            }
        })

        const data: FollowedArtist = await response.json()

        return {data: data, error: null}
    } catch (err) {
        console.log(err)
        return {data: null, error: err}
    }
}

export default FetchFollowedArtist
