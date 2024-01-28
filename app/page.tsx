import LoadingSkeletonAlbum from "@/components/home/loading/loading-skeleton-album"
import { getCurrentTimeString } from "@/utils/time-utils"
import dynamic from "next/dynamic"

export default async function Home() {
  return (
    <main className="flex flex-col h-full px-4 pt-4">
      <div className="mt-4">
        <h1 className="font-black text-3xl">Good {getCurrentTimeString()}</h1>
      </div>
      
      <div className="my-4">
        <TopHitsComponent itemWidth={160} />
      </div>

      <div className="my-4">
        <TopArtistComponent />
      </div>

      <div className="my-4">
        <TopTracksComponent />
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
