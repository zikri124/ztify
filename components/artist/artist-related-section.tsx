import { FetchRelatedArtist } from "@/utils/spotify/fetch-related-artists"
import ArtistsCarousel from "../ui/carousels/artistsCarousel"

const RelatedArtistSection = async ({ artistId }: { artistId: string }) => {
    const { data, error } = await FetchRelatedArtist(artistId)

    return (
        <>
            <div className="mt-4 p-4">
                <h2 className="text-2xl font-bold mb-4 ">Fans also like</h2>
                <div className="w-full overflow-x-auto pb-2">
                    {data && (
                        <ArtistsCarousel artists={data} />
                    )}
                </div>
            </div>
        </>
    )
}

export default RelatedArtistSection