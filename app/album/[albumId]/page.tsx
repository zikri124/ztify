import TracksTable from "@/components/ui/tables/tracks-table"
import { Album } from "@/types/album"
import formatArtistsNameDisplay from "@/utils/format-artist-display-name"
import { FetchDataSpotify } from "@/utils/spotify/fetch-data-spotify"
import Image from "next/image"

const Page = async ({ params }: { params: { albumId: string } }) => {
    const albumData: Album = await FetchDataSpotify(`albums/${params.albumId}`)

    return (
        <>
            <div className="w-full relative flex flex-col md:flex-row justify-items-center items-start md:items-end gap-8 md:gap-12 py-4 md:py-8 px-4">
                <Image alt="artist-photo" src={albumData.images[0].url} height={albumData.images[0].height} width={albumData.images[0].width} className="aspect-square relative object-cover shadow-xl shadow-slate-700 w-full md:w-[16rem]" style={{ height: 'auto' }} />
                <div>
                    <h2 className="text-sm md:text-md text-white font-semibold">Album</h2>
                    <h1 className="text-4xl md:text-6xl font-black text-white">{albumData.name}</h1>
                    <div className="flex gap-2 mt-4 text-md md:text-md">
                        <h4 className="font-bold">{formatArtistsNameDisplay(albumData.artists)} &bull;</h4>
                        <p>{albumData.release_date.split("-")[0]} &bull;</p>
                        <p>{albumData.total_tracks} songs</p>
                    </div>
                </div>
            </div>

            <div>
                <TracksTable tracksResult={albumData.tracks.items} variant={"noimage"} />
            </div>
        </>
    )
}

export default Page
