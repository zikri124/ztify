import { Playlist } from "../playlist"

type AllUserPlaylist = {
    "href": string,
    "limit": number,
    "next": string,
    "offset": number,
    "previous": string,
    "total": number,
    "items": Playlist[]
}

export default AllUserPlaylist
