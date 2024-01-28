import ArtistTopTracks from "@/types/artist/artist-top-tracks"
import { FetchArtistTopTracks } from "@/utils/spotify/fetch-artist-top-tracks"
import TracksTable from "../ui/tables/tracks-table"

const ArtistTopTracksSection = async ({ artistId }: { artistId: string }) => {
    const topTracks: ArtistTopTracks = await FetchArtistTopTracks(artistId)

    const top5Track = topTracks.tracks.slice(0, 5)

    return (
        <>
            <div className="mt-4 p-4">
                <h2 className="text-2xl font-bold mb-4 ">Popular Tracks</h2>
                {topTracks && (
                    <TracksTable tracksResult={topTracks.tracks} variant={"noheader"} />
                )}
            </div>
        </>
    )
}

export default ArtistTopTracksSection
