import formatArtistsNameDisplay from "@/utils/format-artist-display-name"
import { miliToMinSecString } from "@/utils/time-utils"
import { ItemCardVariant2 } from "../spotify-item-card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../table"
import { Track } from "@/types/track"

const TracksTable = ({ tracksResult, variant }: { tracksResult: Track[], variant: string }) => {
    return (
        <Table>
            <TableHeader className={(variant.includes("noheader")) ? "hidden" : "hidden md:contents"}>
                <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:block">Duration</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tracksResult.map((item, i) => (
                    <TableRow key={i}>
                        <TableCell>{i + 1}</TableCell>
                        <TableCell>
                            {(variant.includes("noimage")) ? (
                                <div className="flex-grow flex flex-col gap-1 justify-center">
                                    <h4 className="font-bold line-clamp-1 break-all">{item.name}</h4>
                                    <p className="line-clamp-1 text-sm break-all" >
                                        {formatArtistsNameDisplay(item.artists)}
                                    </p>
                                </div>
                            ) : (
                                <ItemCardVariant2 className={""} imageUrl={item.album.images[0].url} title={item.name} hrefLink={"#"} type={"Song"} subtitle={formatArtistsNameDisplay(item.artists)} />
                            )}

                        </TableCell>
                        <TableCell className="hidden md:block">{miliToMinSecString(item.duration_ms)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default TracksTable
