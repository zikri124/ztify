import { BiggestHits } from "@/types/biggest-hits"
import fetchBiggestHits from "@/utils/spotify/fetch-biggest-hits"
import PlaylistsCarousel from "../ui/carousels/playlists-carousel"

const TodayHits = async ({ itemWidth }: {itemWidth: number}) => {
    const biggestHits: BiggestHits = await fetchBiggestHits()

    return (
        <>
            <h2 className="font-bold text-2xl mt-4 mb-4">Today&apos;s biggest hits</h2>
            <div className="w-full pb-2">
                {biggestHits && (
                    <PlaylistsCarousel data={biggestHits.playlists.items} />
                )}
            </div>
        </>
    )
}

export default TodayHits
