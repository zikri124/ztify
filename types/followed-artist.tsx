export type FollowedArtist = {
    "artists": {
        "href": string,
        "limit": number,
        "next": string,
        "cursors": {
            "after": string,
            "before": string
        },
        "total": number,
        "items": {
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
            "popularity": number,
            "type": "artist",
            "uri": string
        }[]
    }
}