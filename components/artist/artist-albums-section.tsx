import ArtistAlbums from "@/types/artist/artist-albums"
import { FetchArtistAlbums } from "@/utils/spotify/fetch-artist-albums"
import { ItemCardVariant1 } from "../ui/spotify-item-card"
import formatArtistsNameDisplay from "../../utils/format-artist-display-name"

const ArtistAlbumsSection = async ({ artistId }: { artistId: string }) => {
    const albums: ArtistAlbums = await FetchArtistAlbums(artistId)

    return (
        <>
            <div className="mt-4 p-4">
                <h2 className="text-2xl font-bold mb-4 ">Artist Albums</h2>
                <div className="w-full overflow-x-auto pb-2">
                    {albums && (
                        <div className='w-max flex gap-4'>
                            {albums.items.map((album, i) => (
                                <div key={i}>
                                    <ItemCardVariant1 className="" imageUrl={album.images[0].url} title={album.name} hrefLink="/" artist={formatArtistsNameDisplay(album.artists)} type="Album" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ArtistAlbumsSection