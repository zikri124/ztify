export type BiggestHits = {
    "message": string,
    "playlists": {
        "href": string,
        "limit": number,
        "next": string | null,
        "offset": number,
        "previous": string | null,
        "total": number,
        "items":
        {
            "collaborative": false,
            "description": string,
            "external_urls": {
                "spotify": string
            },
            "href": string,
            "id": string,
            "images": {
                "url": string,
                "height": number | null,
                "width": number | null
            }[]
            ,
            "name": "Lagi Viral",
            "owner": {
                "external_urls": {
                    "spotify": string
                },
                "href": string,
                "id": string,
                "type": string,
                "uri": string,
                "display_name": string | null
            },
            "public": boolean | null,
            "snapshot_id": string,
            "tracks": {
                "href": string,
                "total": number
            },
            "type": string,
            "uri": string,
            "primary_color": null
        }[]

    }
}