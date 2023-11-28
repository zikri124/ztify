import { User } from "@/app/types/user"
import { cookies } from "next/headers"

const fetchUserData = async () => {
    const accessToken = cookies().get("access_token")
    const token = `Bearer ${accessToken?.value}`
    
    const response = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: {
            Authorization: token
        }
    })

    const data: User = await response.json()
    console.log(data)

    return data
}

export default fetchUserData
