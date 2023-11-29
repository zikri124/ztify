import { TopArtists } from "@/app/types/top-artists"
import Image from "next/image"

const UserTopArtists = async ({ topArtists }: { topArtists: TopArtists }) => {

    return (
        <>
            <div className="w-full overflow-x-auto pb-2">
                <div className='w-max flex gap-4'>
                    {topArtists.items.map((artist, i) => (
                        <div key={i}>
                            <Image height={180} width={180} alt="artist-photo" src={artist.images[0].url} className="rounded-full aspect-square relative object-cover" />
                            <h4 className="font-bold text-center mt-2 line-clamp-1 break-word" style={{width:"180px"}}>{artist.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default UserTopArtists
