import { Playlist } from "./playlist"

export type BiggestHits = {
    "message": string,
    "playlists": {
        "href": string,
        "limit": number,
        "next": string | null,
        "offset": number,
        "previous": string | null,
        "total": number,
        "items": Playlist[]
    }
}