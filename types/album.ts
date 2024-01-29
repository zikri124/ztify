import { Track } from "./track"

export type Album = {
    "album_type": string,
    "total_tracks": number,
    "available_markets": string[] | null,
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
        "reason": string | null
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
    tracks: {
        "href": string,
        "items": Track[]
    },
    "is_playable": boolean | null,
    "album_group": string | null
}