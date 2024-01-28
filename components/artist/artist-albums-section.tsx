import ArtistAlbums from "@/types/artist/artist-albums"
import { FetchArtistAlbums } from "@/utils/spotify/fetch-artist-albums"
import AlbumsCarousel from "../ui/carousels/albums-carousel"

const ArtistAlbumsSection = async ({ artistId }: { artistId: string }) => {
    const albums: ArtistAlbums = await FetchArtistAlbums(artistId)

    return (
        <>
            <div className="mt-4 p-4">
                <h2 className="text-2xl font-bold mb-4 ">Artist Albums</h2>
                <div className="w-full overflow-x-auto pb-2">
                    <AlbumsCarousel data={albums.items} />
                </div>
            </div>
        </>
    )
}

export default ArtistAlbumsSection