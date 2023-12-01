type ArtistRelated = {
    "artists": {
        "external_urls": {
            "spotify": string
        },
        "followers": {
            "href": string,
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
        "popularity": 0,
        "type": string,
        "uri": string
    }[]
}

export default ArtistRelated