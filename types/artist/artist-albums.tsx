type ArtistAlbums = {
    "href": string,
    "limit": number,
    "next": string | null,
    "offset": number,
    "previous": string | null,
    "total": number,
    "items": {
        "album_type": string,
        "total_tracks": number,
        "available_markets": string[],
        "external_urls": {
            "spotify": string
        },
        "href": string,
        "id": string,
        "images": {
            "url": string,
            "height": number,
            "width": number
        }[],
        "name": string,
        "release_date": string,
        "release_date_precision": string,
        "restrictions": {
            "reason": string
        },
        "type": string,
        "uri": string,
        "artists": {
            "external_urls": {
                "spotify": string
            },
            "href": string,
            "id": string,
            "name": string,
            "type": string,
            "uri": string
        }[],
        "album_group": string
    }[]
}

export default ArtistAlbums