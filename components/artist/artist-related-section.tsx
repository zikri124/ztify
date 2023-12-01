import { FetchRelatedArtist } from "@/utils/spotify/fetch-related-artists"
import { ArtistCardVariant1 } from "../ui/spotify-item-card"

const RelatedArtistSection = async ({ artistId }: { artistId: string }) => {
    const { data, error } = await FetchRelatedArtist(artistId)

    const artists = data?.artists

    return (
        <>
            <div className="mt-4 p-4">
                <h2 className="text-2xl font-bold mb-4 ">Fans also like</h2>
                <div className="w-full overflow-x-auto pb-2">
                    {artists && (
                        <div className='w-max flex gap-4'>
                            {artists.map((artist, i) => (
                                <div key={i}>
                                    <ArtistCardVariant1 className={""} imageUrl={artist.images[1].url} hrefLink={`/artist/${artist.id}`} artist={artist.name} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default RelatedArtistSection