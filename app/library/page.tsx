import { SkeletonItemCardVariant2 } from "@/components/ui/spotify-item-card"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"

const YourLibraryPage = () => {
    return (
        <main className="px-4 pt-4">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold my-4">Your Library</h1>
                <Link href='/'>
                    <Image alt="add-logo" height={28} width={28} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAkklEQVR4nO3XMQoCMRBG4Xc8YyHevzCga6GXyCKkClqIsP8G3wfTz+xrNiBJH5yBJ/AATkzoDrQ+CxNqw0yneUCYBdIskGaBNAukWSDNAr84AvXNV0xNBco3B1x3sHQbZvmrAwpw2cHSrc9rlwMbG5eYTvOAMAukWSDNAmkWSLNAmgXS6vA/P50C3Pps/hiRxBxWyNwXgMwNpAgAAAAASUVORK5CYII=" className="invert" />
                </Link>
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
