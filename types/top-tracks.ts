import { Track } from "./track"

export type TopTracks = {
    "href": string,
    "limit": number,
    "next": string | null,
    "offset": number,
    "previous": string | null,
    "total": number,
    "items": Track[]
}
