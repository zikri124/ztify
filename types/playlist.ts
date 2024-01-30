import { Track } from "./track"
import { User } from "./user"

export type Playlist = {
    "collaborative": false,
    "description": string,
    "external_urls": {
        "spotify": string
    },
    "followers": {
        "href": string,
        "total": number
    },
    "href": string,
    "id": string,
    "images": {
        "url": string,
        "height": number,
        "width": number
    }[],
    "name": string,
    "owner": {
        "external_urls": {
            "spotify": string
        },
        "followers": {
            "href": string | null,
            "total": number | null
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
        "total": number,
        "items": {
            "added_at": string,
            "added_by": User,
            "is_local": boolean,
            "track": Track
        } []
    },
    "type": string,
    "uri": string,
    "primary_color": null
}