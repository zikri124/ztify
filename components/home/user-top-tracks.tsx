import { TopTracks, Artist } from "@/app/types/top-tracks"
import fetchTopTracks from "@/utils/spotify/fetch-top-tracks"
import Image from "next/image"
import Link from "next/link"
import formatArtistsNameDisplay from "../format-artist-display-name"

const UserTopTracks = async ({ itemWidth }: { itemWidth: number }) => {
    const topTracks: TopTracks = await fetchTopTracks()

    return (
        <>
            <h2 className="font-bold text-2xl mt-4 mb-4">Your favorite tracks</h2>
            <div className="w-full overflow-x-auto pb-2">
                {topTracks.items && (
                    <div className='w-max flex gap-4'>
                        {topTracks.items.map((item, i) => (
                            <Link key={i} href={"/"}>
                                <Image height={itemWidth} width={itemWidth} alt="artist-photo" src={item.album.images[1].url} className="aspect-square relative object-cover" />
                                <h4 className="font-bold mt-2 line-clamp-1 break-word" style={{ width: `${itemWidth}px` }} >{item.name}</h4>
                                <p className="line-clamp-1 text-sm" style={{ width: `${itemWidth}px` }}>
                                    {formatArtistsNameDisplay(item.artists)}
                                </p>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default UserTopTracks
