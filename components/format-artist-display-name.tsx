import { Artist } from "@/app/types/top-tracks"

const formatArtistsNameDisplay = (artists: Artist[]) => {
    return (
        <>
            {(artists.length > 1) ?
                (
                    <>
                        {artists.map((artist, i2) => (
                            <span key={i2}>
                                {(i2 > 0) ?
                                    (
                                        <>, {artist.name}</>
                                    ) : (
                                        <>{artist.name}</>
                                    )
                                }
                            </span>
                        ))}
                    </>
                ) : (
                    <>
                        {artists[0].name}
                    </>
                )
            }
        </>
    )
}

export default formatArtistsNameDisplay
