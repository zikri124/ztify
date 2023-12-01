import { Skeleton } from "@/components/ui/skeleton"
import { SkeletonItemCardVariant2 } from "@/components/ui/spotify-item-card"

const ArtistTracksLoading = () => {
    return (
        <div className="mt-4 p-4">
            <Skeleton className="h-4 w-24 mb-4" />
            <div className="flex flex-col gap-4">
                {[...Array(2)].map((track, i) => (
                    <div key={i}>
                        <SkeletonItemCardVariant2 />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ArtistTracksLoading
