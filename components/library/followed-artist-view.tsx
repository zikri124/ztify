import { ArtistCardVariant2 } from "../ui/spotify-item-card"
import FetchFollowedArtist from "@/utils/spotify/fetch-followed-artist"

const AllUserPlaylistView = async () => {
    const followedArtist = await FetchFollowedArtist()

    const artists = followedArtist.data?.artists.items

    return (
        <>
            {artists && (
                <div className="flex flex-col gap-4">
                    {artists.map((artist, i) => (
                        <div key={i}>
                            <ArtistCardVariant2 className={""} imageUrl={artist.images[0].url} hrefLink={`/artist/${artist.id}`} artist={artist.name} />
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default AllUserPlaylistView
