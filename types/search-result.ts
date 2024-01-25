import { Album } from "./album"
import ArtistData from "./artist/artist-data"
import { Playlist } from "./playlist"
import { Track } from "./track"

export type SearchResult = {
    "tracks": {
        "href": string,
        "limit": number,
        "next": string | null,
        "offset": number,
        "previous": string | null,
        "total": number,
        "items": Track[]
    },
    "artists": {
        "href": string,
        "limit": number,
        "next": string,
        "offset": number,
        "previous": string,
        "total": number,
        "items": ArtistData[]
    },
    "albums": {
        "href": string,
        "limit": number,
        "next": string | null,
        "offset": number,
        "previous": string | null,
        "total": number,
        "items": Album[]
    },
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
