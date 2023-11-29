import { TopArtists } from "@/app/types/top-artists"
import fetchTopArtists from "@/utils/spotify/fetch-top-artists"
import Image from "next/image"
import Link from "next/link"

const UserTopArtists = async ({ itemWidth }: {itemWidth: number}) => {
    const topArtists: TopArtists = await fetchTopArtists()
    
    return (
        <>
            <div className="w-full overflow-x-auto pb-2">
                {topArtists.items && (
                    <div className='w-max flex gap-4'>
                        {topArtists.items.map((artist, i) => (
                            <Link key={i} href={"/"}>
                                <Image height={itemWidth} width={itemWidth} alt="artist-photo" src={artist.images[0].url} className="rounded-full aspect-square relative object-cover" />
                                <h4 className="font-bold text-center mt-2 line-clamp-1 break-word" style={{ width: `${itemWidth}px` }}>{artist.name}</h4>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default UserTopArtists
