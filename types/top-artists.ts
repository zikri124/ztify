import ArtistData from "./artist/artist-data"

export type TopArtists = {
    "href": string,
    "limit": number,
    "next": string,
    "cursors": {
        "after": string
    },
    "total": number,
    "items": ArtistData[]
}
