import AllUserPlaylist from "@/types/playlist/all-user-playlist"
import { cookies } from "next/headers"

export const FetchAllUserPlaylists = async () => {
    const accessToken = cookies().get("access_token")
    const token = `Bearer ${accessToken?.value}`

    try {
        const response = await fetch(`https://api.spotify.com/v1/me/playlists`, {
            method: "GET",
            headers: {
                Authorization: token
            }
        })

        const data: AllUserPlaylist = await response.json()

        return {data: data, error: null}
    } catch (err) {
        console.log(err)
        return {data: null, error: err}
    }
}

export default FetchAllUserPlaylists
