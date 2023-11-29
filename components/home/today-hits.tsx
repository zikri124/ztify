import { BiggestHits } from "@/types/biggest-hits"
import fetchBiggestHits from "@/utils/spotify/fetch-biggest-hits"
import Image from "next/image"
import Link from "next/link"

const TodayHits = async ({ itemWidth }: {itemWidth: number}) => {
    const biggestHits: BiggestHits = await fetchBiggestHits()

    return (
        <>
            <h2 className="font-bold text-2xl mt-4 mb-4">Today's biggest hits</h2>
            <div className="w-full overflow-x-auto pb-2">
                {biggestHits && (
                    <div className='w-max flex gap-4'>
                        {biggestHits.playlists.items.map((item, i) => (
                            <Link key={i} href={"/"}>
                                <Image height={itemWidth} width={itemWidth} alt="artist-photo" src={item.images[0].url} className="aspect-square relative object-cover" />
                                <h4 className="mt-2 line-clamp-2 break-word" style={{ width: `${itemWidth}px` }}>{item.description}</h4>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default TodayHits
