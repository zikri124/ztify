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
    let artistsString = ""
    artists.forEach((artist, i) => {
        artistsString += (i > 0) ? ", " + artist.name : artist.name
    })

    return artistsString
}

export default formatArtistsNameDisplay
