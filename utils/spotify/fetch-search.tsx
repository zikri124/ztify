import { SearchResult } from "@/app/types/search-result"

const fetchSearch = async (query: string) => {
    const tokenResponse = await fetch("/api/header-cookie?name=access_token")
    const jsonRes = await tokenResponse.json()
    const accessToken = jsonRes["data"]
    const token = `Bearer ${accessToken}`
    
    if (accessToken !== null) {
        const str2 = query.replaceAll(" ", "%20") 
        
        const url = `https://api.spotify.com/v1/search?q=${str2}&type=album%2Cplaylist%2Ctrack%2Cartist&limit=5&market=ID&offset=0`

        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: token
            }
        })
    
        const data: SearchResult = await response.json()
    
        return data
    }
    return null
}

export default fetchSearch
