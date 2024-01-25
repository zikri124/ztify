import { TopArtists } from "@/types/top-artists"
import fetchTopArtists from "@/utils/spotify/fetch-top-artists"
import ArtistsCarousel from "../ui/carousels/artistsCarousel"

const UserTopArtists = async () => {
    const topArtists: TopArtists = await fetchTopArtists()

    return (
        <>
            <h2 className="font-bold text-2xl mb-4">Your favorite artists</h2>
            <div className="w-full overflow-x-auto pb-2">
                {topArtists.items && (
                    <ArtistsCarousel artists={topArtists.items} />
                )}
            </div>
        </>
    )
}

export default UserTopArtists
