import LoadingSkeletonAlbum from "@/components/home/loading/loading-skeleton-album"
import dynamic from "next/dynamic"
import { DynamicImportHeader } from "@/components/header/dynamic-import-header"

export default async function Home() {
  return (
    <main className="flex flex-col h-full px-4 pt-4">
      <DynamicImportHeader />

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
