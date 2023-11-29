import { TopTracks } from "@/app/types/top-tracks"
import Image from "next/image"

const UserTopTracks = async ({ topTracks }: { topTracks: TopTracks }) => {
    return (
        <>
            <div className="w-full overflow-x-auto pb-2">
                <div className='w-max flex gap-4'>
                    {topTracks.items.map((item, i) => (
                        <div key={i}>
                            <Image height={180} width={180} alt="artist-photo" src={item.album.images[1].url} className="aspect-square relative object-cover" />
                            <h4 className="font-bold mt-2 line-clamp-1 break-word" style={{ width: "180px" }} >{item.name}</h4>
                            <p className="line-clamp-1 text-sm" style={{ width: "180px" }}>{(item.artists.length > 1) ?
                                (
                                    <>
                                        {item.artists.map((artist, i2) => (
                                            <span key={i2}>
                                                {(i2 > 0) ? 
                                                    (
                                                        <>, {artist.name}</>
                                                    ) : (
                                                        <>{artist.name}</>
                                                    )
                                                }
                                            </span>
                                        ))}
                                    </>
                                ) : (
                                    <>
                                        {item.artists[0].name}
                                    </>
                                )
                            }
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default UserTopTracks
