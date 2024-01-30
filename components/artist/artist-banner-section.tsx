import { FetchArtistMainData } from "@/utils/spotify/fetch-artist-data"
import { numberToShortString } from "@/utils/string-formatter"
import Image from "next/image"

const ArtistBannerSection = async ({ artistId }: { artistId: string }) => {
    const response = await FetchArtistMainData(artistId)

    const artistData = response?.data

    return (
        <>
            {artistData && (
                <div className="w-full relative flex flex-col md:flex-row justify-items-center items-start md:items-end gap-8 lg:gap-12 py-4 md:py-8 px-4">
                    <Image alt="artist-photo" src={artistData.images[0].url} height={artistData.images[0].height | 300} width={artistData.images[0].width | 300} className="aspect-square relative object-cover shadow-xl shadow-slate-700 w-full md:w-[16rem]" style={{height: 'auto'}} />
                    <div>
                        <h2 className="text-sm md:text-md text-white font-semibold">Artist</h2>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">{artistData.name}</h1>
                        <div className="flex gap-2 text-md md:text-md mt-2 font-semibold">
                            <p>{numberToShortString(artistData.followers.total)} followers</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ArtistBannerSection
