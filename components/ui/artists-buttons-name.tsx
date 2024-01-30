import { Button } from "@/components/ui/button"
import ArtistData from "@/types/artist/artist-data"
import Link from "next/link"

const FormatArtistsNameDisplay = ({ artists, className }: { artists: ArtistData[], className: string }) => {
    return (
        <>
            <div className="flex">
                {artists.map((artist, i) => (
                    <Link href={`/artist/${artist.id}`} key={i} className={`p-0 h-fit ${className}`}>
                        <Button variant={"link"} className={`p-0 h-fit ${className}`}>{artist.name}</Button>
                        &nbsp;&bull;&nbsp;
                    </Link>
                ))}
            </div>
        </>
    )
}

export default FormatArtistsNameDisplay
