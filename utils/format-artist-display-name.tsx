type Artist = {
    "external_urls": {
        "spotify": string
    },
    "href": string,
    "id": string,
    "name": string,
    "type": string,
    "uri": string
}

const formatArtistsNameDisplay = (artists: Artist[]) => {
    if (artists.length == 1) {
        return artists[0].name
    }

    let artistsString = artists.join(", ")

    return artistsString
}

export default formatArtistsNameDisplay
