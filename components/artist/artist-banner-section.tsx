import { FetchArtistMainData } from "@/utils/spotify/fetch-artist-data"
import Image from "next/image"

const ArtistBannerSection = async ({ artistId }: { artistId: string }) => {
    const response = await FetchArtistMainData(artistId)

    const artistData = response?.data

    if (response?.error) {
        return (
            <h4 className="text-xl font-bold">Something went wrong</h4>
        )
    }

    return (
        <>
            {artistData && (
                <div className="w-full aspect-[4/3] relative">
                    <div className="absolute z-10 p-4 w-full bottom-0 bg-gradient-to-b from-transparent to-neutral-800">
                        <h1 className="text-5xl font-bold text-white">{artistData.name}</h1>
                    </div>
                    <Image alt="artist-photo" src={artistData.images[0].url} height={artistData.images[0].height} width={artistData.images[0].width} className="w-full aspect-[4/3] object-cover" />
                </div>
            )}
        </>
    )
}

export default ArtistBannerSection
