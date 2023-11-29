export type SearchResult = {
    "tracks": {
        "href": string,
        "limit": number,
        "next": string | null,
        "offset": number,
        "previous": string | null,
        "total": number,
        "items": {
            "album": {
                "album_type": string,
                "total_tracks": number,
                "external_urls": {
                    "spotify": string
                },
                "href": string,
                "id": string,
                "images": {
                    "url": string,
                    "height": number | null,
                    "width": number | null
                }[],
                "name": string,
                "release_date": string,
                "release_date_precision": string,
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
                "is_playable": boolean
            },
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
            "disc_number": number,
            "duration_ms": number,
            "explicit": boolean,
            "external_ids": {
                "isrc": string
            },
            "external_urls": {
                "spotify": string
            },
            "href": string,
            "id": string,
            "is_playable": boolean,
            "name": string,
            "popularity": number,
            "preview_url": string,
            "track_number": number,
            "type": string,
            "uri": string,
            "is_local": false
        }[]
    },
    "artists": {
        "href": string,
        "limit": number,
        "next": string | null,
        "offset": number,
        "previous": string | null,
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
                "height": number | null,
                "width": number | null
            }[],
            "name": string,
            "popularity": number,
            "type": string,
            "uri": string
        }[]
    },
    "albums": {
        "href": string,
        "limit": number,
        "next": string | null,
        "offset": number,
        "previous": string | null,
        "total": number,
        "items": {
            "album_type": string,
            "total_tracks": number,
            "external_urls": {
                "spotify": string
            },
            "href": string,
            "id": string,
            "images": {
                "url": string,
                "height": number | null,
                "width": number | null
            }[],
            "name": string,
            "release_date": string,
            "release_date_precision": string,
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
            "is_playable": boolean
        }[]
    },
    "playlists": {
        "href": string,
        "limit": number,
        "next": string | null,
        "offset": number,
        "previous": string | null,
        "total": number,
        "items": {
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
            }[],
            "name": string,
            "owner": {
                "external_urls": {
                    "spotify": string
                },
                "href": string,
                "id": string,
                "type": string,
                "uri": string,
                "display_name": string
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
