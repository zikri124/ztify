type ArtistData = {
    "external_urls": {
        "spotify": string
    },
    "followers": {
        "href": string | null,
        "total": number
    },
    "genres": string[],
    "href": string,
    "id": string,
    "images": {
        "url": string,
        "height": number,
        "width": number
    }[],
    "name": string,
    "popularity": number,
    "type": string,
    "uri": string
} 

export default ArtistData
