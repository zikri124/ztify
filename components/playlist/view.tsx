import { Playlist } from "@/types/playlist"
import { Track } from "@/types/track"
import Image from "next/image"
import TracksTable from "../ui/tables/tracks-table"
import { FetchDataSpotify } from "@/utils/spotify/fetch-data-spotify"
import { numberToShortString } from "@/utils/string-formatter"

const View = async ({playlistId}: {playlistId: string}) => {
    const playlistData: Playlist = await FetchDataSpotify(`playlists/${playlistId}`)
    
    const getTracksArray = (playlist: Playlist) => {
        const tracksArray: Track[] = []

        playlist.tracks.items.forEach((track) => {
            tracksArray.push(track.track)
        })

        return tracksArray
    }
    
    return (
        <>
            <div className="w-full relative flex flex-col md:flex-row justify-items-center items-start md:items-end gap-8 lg:gap-12 py-4 md:py-8 px-4">
                <Image alt="artist-photo" src={playlistData.images[0].url} height={playlistData.images[0].height | 300} width={playlistData.images[0].width | 300} className="aspect-square relative object-cover shadow-xl shadow-slate-700 w-full md:w-[16rem]" style={{ height: 'auto' }} />
                <div>
                    <h2 className="text-sm md:text-md text-white font-semibold">Playlist</h2>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">{playlistData.name}</h1>
                    {playlistData.description && (
                        <p className="text-neutral-300">{playlistData.description}</p>
                    )}
                    <div className="flex gap-2 text-md md:text-md mt-2">
                        <h4 className="font-bold">{playlistData.owner.display_name} &bull;</h4>
                        {playlistData.followers.total && (
                            <p>{numberToShortString(playlistData.followers.total)} users follow this &bull;</p>
                        )}
                        <p>{numberToShortString(playlistData.tracks.total)} songs</p>
                    </div>
                </div>
            </div>

            <div>
                <TracksTable tracksResult={getTracksArray(playlistData)} variant={"default"} />
            </div>
        </>
    )
}

export default View
