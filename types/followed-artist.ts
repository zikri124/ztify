import ArtistData from "./artist/artist-data"

export type FollowedArtist = {
    "artists": {
        "href": string,
        "limit": number,
        "next": string,
        "cursors": {
            "after": string,
            "before": string
        },
        "total": number,
        "items": ArtistData[]
    }
}