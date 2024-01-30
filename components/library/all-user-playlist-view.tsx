import FetchAllUserPlaylists from "@/utils/spotify/fetch-all-user-playlist"
import { ItemCardVariant2 } from "../ui/spotify-item-card"

const AllUserPlaylistView = async () => {
    const playlistRes = await FetchAllUserPlaylists()

    const playlist = playlistRes.data?.items

    return (
        <>
            {playlist && (
                <div className="flex flex-col gap-4">
                    {playlist.map((item, i) => (
                        <div key={i}>
                            <ItemCardVariant2 className="" imageUrl={item.images[0].url} title={item.name} hrefLink={"#"} type={"Playlist"} subtitle={item.owner.display_name} />
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default AllUserPlaylistView
