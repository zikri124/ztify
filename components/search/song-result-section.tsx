import formatArtistsNameDisplay from "@/utils/format-artist-display-name"
import { miliToMinSecString } from "@/utils/time-parser"
import { ItemCardVariant2 } from "../ui/spotify-item-card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../ui/table"
import { Track } from "@/types/track"
import TracksTable from "../ui/tables/tracks-table"

const SongResultSection = ({tracksResult}: {tracksResult: Track[]}) => {
    return (
        <div className="py-2">
            <h2 className="font-bold text-2xl mt-4 mb-4">Songs</h2>
            <TracksTable tracksResult={tracksResult} variant="default" />
        </div>
    )
}

export default SongResultSection
