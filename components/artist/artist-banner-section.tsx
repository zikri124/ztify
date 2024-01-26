import { FetchArtistMainData } from "@/utils/spotify/fetch-artist-data"
import Image from "next/image"

const ArtistBannerSection = async ({ artistId }: { artistId: string }) => {
    const response = await FetchArtistMainData(artistId)

    const artistData = response?.data

    return (
        <>
            {artistData && (
                <div className="w-full relative flex flex-col md:flex-row justify-items-center items-center gap-12 py-4 md:py-8 px-4">
                    {/* <div className="absolute z-10 p-4 w-full bottom-0 bg-gradient-to-b from-transparent to-neutral-800">
                        <h1 className="text-5xl font-bold text-white">{artistData.name}</h1>
                    </div>
                    <Image alt="artist-photo" src={artistData.images[0].url} height={artistData.images[0].height} width={artistData.images[0].width} className="w-full aspect-[4/3] md:h-[40vh] object-cover" /> */}
                    <Image alt="artist-photo" src={artistData.images[0].url} height={artistData.images[0].height} width={artistData.images[0].width} className="aspect-squere relative object-cover shadow-xl shadow-slate-700 w-full md:w-[16rem]" style={{height: 'auto'}} />
                    <div>
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Artist</h2>
                        <h1 className="text-6xl font-bold text-white">{artistData.name}</h1>
                    </div>
                </div>
            )}
        </>
    )
}

export default ArtistBannerSection
