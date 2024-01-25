import { Album } from "./album"
import ArtistData from "./artist/artist-data"

export type Track = {
    "album": Album,
    "artists": ArtistData[],
    "available_markets": string[] | null,
    "disc_number": number,
    "duration_ms": number,
    "explicit": boolean,
    "external_ids": {
        "isrc": string,
        "ean": string | null,
        "upc": string | null
    },
    "external_urls": {
        "spotify": string
    },
    "restrictions": {
        "reason": string | null
    },
    "href": string,
    "id": string,
    "is_playable": boolean | null,
    "name": string,
    "popularity": number,
    "preview_url": string,
    "track_number": number,
    "type": string,
    "uri": string,
    "is_local": false
}