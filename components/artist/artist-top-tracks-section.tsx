import ArtistTopTracks from "@/types/artist/artist-top-tracks"
import TracksTable from "../ui/tables/tracks-table"
import { FetchDataSpotify } from "@/utils/spotify/fetch-data-spotify"

const ArtistTopTracksSection = async ({ artistId }: { artistId: string }) => {
    const topTracks: ArtistTopTracks = await FetchDataSpotify(`artists/${artistId}/top-tracks?market=ID`)

    const top5Track = topTracks.tracks.slice(0, 5)

    return (
        <>
            <div className="mt-4 p-4">
                <h2 className="text-2xl font-bold mb-4 ">Popular Tracks</h2>
                {topTracks && (
                    <TracksTable tracksResult={top5Track} variant={"noheader"} />
                )}
            </div>
        </>
    )
}

export default ArtistTopTracksSection
