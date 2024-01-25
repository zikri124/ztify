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
                    <div className='w-max flex gap-4'>
                        {topArtists.items.map((artist, i) => (
                            <div key={i}>
                                <ArtistCardVariant1 className={""} imageUrl={artist.images[0].url} hrefLink={`/artist/${artist.id}`} artist={artist.name} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default UserTopArtists
