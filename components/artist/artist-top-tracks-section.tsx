import ArtistTopTracks from "@/types/artist/artist-top-tracks"
import { FetchArtistTopTracks } from "@/utils/spotify/fetch-artist-top-tracks"
import { ItemCardVariant2 } from "../ui/spotify-item-card"
import formatArtistsNameDisplay from "@/utils/format-artist-display-name"

const ArtistTopTracksSection = async ({ artistId }: { artistId: string }) => {
    const topTracks: ArtistTopTracks = await FetchArtistTopTracks(artistId)

    const top5Track = topTracks.tracks.slice(0, 5)

    return (
        <>
            <div className="mt-4 p-4">
                <h2 className="text-2xl font-bold mb-4 ">Popular</h2>
                {topTracks && (
                    <div className="flex flex-col gap-4">
                        {top5Track.map((track, i) => (
                            <div key={i}>
                                <ItemCardVariant2 className="" imageUrl={track.album.images[0].url} title={track.name} artist={formatArtistsNameDisplay(track.artists)} hrefLink="/" type="Song" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default ArtistTopTracksSection
