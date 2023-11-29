import { BiggestHits } from "@/app/types/biggest-hits"
import Image from "next/image"
import Link from "next/link"

const TodayHits = async ({ biggestHits }: { biggestHits: BiggestHits }) => {
    return (
        <>
            <div className="w-full overflow-x-auto pb-2">
                <div className='w-max flex gap-4'>
                    {biggestHits.playlists.items.map((item, i) => (
                        <Link key={i} href={"/"}>
                            <Image height={180} width={180} alt="artist-photo" src={item.images[0].url} className="aspect-square relative object-cover" />
                            <h4 className="mt-2 line-clamp-2 break-word" style={{width:"180px"}}>{item.description}</h4>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TodayHits
