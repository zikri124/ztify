import fetchUserData from "@/utils/spotify/fetch-user-data"
import Header from "../components/header/header"
import isMobileSize from "../utils/get-window-size"
import { User } from "./types/user"
import { TopArtists } from "./types/top-artists"
import fetchTopArtists from "@/utils/spotify/fetch-top-artists"
import UserTopArtists from "@/components/home/user-top-artists"
import UserTopTracks from "@/components/home/user-top-tracks"
import { TopTracks } from "./types/top-tracks"
import fetchTopTracks from "@/utils/spotify/fetch-top-tracks"
import fetchBiggestHits from "@/utils/spotify/fetch-biggest-hits"
import { BiggestHits } from "./types/biggest-hits"
import TodayHits from "@/components/home/today-hits"

export default async function Home() {
  // const isMobile = isMobileSize()
  const isMobile = true
  const userData: User = await fetchUserData()
  const topArtists: TopArtists = await fetchTopArtists()
  const topTracks: TopTracks = await fetchTopTracks()
  const biggestHits: BiggestHits = await fetchBiggestHits()

  return (
    <main className="flex flex-col h-full">
      {isMobile && <Header isMobile={true} />}

      <div>
        <h3 className="text-3xl font-bold mt-4">Hello {userData.display_name}</h3>
      </div>

      <div className="my-4">
        <h2 className="font-bold text-2xl mt-4 mb-4">Today's biggest hits</h2>
        <TodayHits biggestHits={biggestHits} />
      </div>

      <div className="my-4">
        <h2 className="font-bold text-2xl mb-4">Your favorite artists</h2>
        <UserTopArtists topArtists={topArtists} />
      </div>

      <div className="my-4">
        <h2 className="font-bold text-2xl mt-4 mb-4">Your favorite tracks</h2>
        <UserTopTracks topTracks={topTracks} />
      </div>
    </main>
  )
}
