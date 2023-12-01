import { TopTracks } from "@/types/top-tracks"
import fetchTopTracks from "@/utils/spotify/fetch-top-tracks"
import formatArtistsNameDisplay from "../../utils/format-artist-display-name"
import { ItemCardVariant1 } from "../ui/spotify-item-card"

const UserTopTracks = async () => {
    const topTracks: TopTracks = await fetchTopTracks()

    return (
        <>
            <h2 className="font-bold text-2xl mt-4 mb-4">Your favorite tracks</h2>
            <div className="w-full overflow-x-auto pb-2">
                {topTracks.items && (
                    <div className='w-max flex gap-4'>
                        {topTracks.items.map((item, i) => (
                            <div key={i}>
                                <ItemCardVariant1 className={""} imageUrl={item.album.images[1].url} title={item.name} artist={formatArtistsNameDisplay(item.artists)} hrefLink="/" type="Song" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default UserTopTracks
