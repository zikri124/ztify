import { TopTracks } from "@/types/top-tracks"
import fetchTopTracks from "@/utils/spotify/fetch-top-tracks"
import TracksCarousel from "../ui/carousels/tracks-carousel"

const UserTopTracks = async () => {
    const topTracks: TopTracks = await fetchTopTracks()

    return (
        <>
            <h2 className="font-bold text-2xl mt-4 mb-4">Your favorite tracks</h2>
            <div className="w-full overflow-x-auto pb-2">
                {topTracks.items && (
                    <TracksCarousel data={topTracks.items} />
                )}
            </div>
        </>
    )
}

export default UserTopTracks
