import fetchUserData from "@/utils/spotify/fetch-user-data"
import Header from "../components/header/header"
import { User } from "./types/user"
import LoadingSkeletonAlbum from "@/components/home/loading/loading-skeleton-album"
import dynamic from "next/dynamic"

export default async function Home() {
  // const isMobile = isMobileSize()
  const isMobile = true
  const userData: User = await fetchUserData()

  return (
    <main className="flex flex-col h-full">
      {isMobile && <Header isMobile={true} />}

      <div>
        <h3 className="text-3xl font-bold mt-12 line-clamp-1 w-full break-words">Hello {userData.display_name}</h3>
      </div>

      <div className="my-4">
        <h2 className="font-bold text-2xl mt-4 mb-4">Today's biggest hits</h2>
        <TopHitsComponent itemWidth={160} />
      </div>

      <div className="my-4">
        <h2 className="font-bold text-2xl mb-4">Your favorite artists</h2>
        <TopArtistComponent itemWidth={160} />
      </div>

      <div className="my-4">
        <h2 className="font-bold text-2xl mt-4 mb-4">Your favorite tracks</h2>
        <TopTracksComponent itemWidth={160} />
      </div>
    </main>
  )
}

const TopHitsComponent = dynamic(
  () => import('../components/home/today-hits'),
  {
    loading: LoadingSkeletonAlbum
  }
)

const TopTracksComponent = dynamic(
  () => import('../components/home/user-top-tracks'),
  {
    loading: LoadingSkeletonAlbum
  }
)

const TopArtistComponent = dynamic(
  () => import('../components/home/user-top-artists'),
  {
    loading: LoadingSkeletonAlbum
  }
)
