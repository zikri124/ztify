import { Album } from "../album"

type ArtistAlbums = {
    "href": string,
    "limit": number,
    "next": string | null,
    "offset": number,
    "previous": string | null,
    "total": number,
    "items": Album[]
}

export default ArtistAlbums