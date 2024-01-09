import CreatePlaylistDialog from "@/components/library/create-playlist-dialog"
import { SkeletonItemCardVariant2 } from "@/components/ui/spotify-item-card"
import dynamic from "next/dynamic"

const YourLibraryPage = () => {
    return (
        <main className="px-4 pt-4">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold my-4">Your Library</h1>
                {/* <CreatePlaylistDialog /> */}
            </div>

            <UserPlaylistComponent />
            <div className="mt-4" />
            <ArtistFollowedComponent />
        </main>
    )
}

const UserPlaylistComponent = dynamic(
    () => import('../../components/library/all-user-playlist-view'),
    {
        loading: SkeletonItemCardVariant2
    }
)

const ArtistFollowedComponent = dynamic(
    () => import('../../components/library/followed-artist-view'),
    {
        loading: SkeletonItemCardVariant2
    }
)

export default YourLibraryPage
