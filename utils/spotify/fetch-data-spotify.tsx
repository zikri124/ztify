import { cookies } from "next/headers"

export const FetchDataSpotify = async (path: string) => {
    const accessToken = cookies().get("access_token")
    const token = `Bearer ${accessToken?.value}`
    
    try {
        const response = await fetch(`https://api.spotify.com/v1/${path}`, {
            method: "GET",
            headers: {
                Authorization: token
            }
        })
    
        if (!response.ok) {
            throw new Error(response.statusText)
        } else {
            const data = await response.json()
        
            return data
        }
    } catch (error) {
        throw new Error(error + "")
    }
}
