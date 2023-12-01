import { Skeleton } from "@/components/ui/skeleton"
import { SkeletonItemCardVariant1 } from "@/components/ui/spotify-item-card"

const ArtistAlbumsLoading = () => {
    return (
        <div className="mt-4 p-4">
            <Skeleton className="h-4 w-24 mb-4" />
            <div className="w-full overflow-x-auto pb-2">
                <div className='w-max flex gap-4'>
                    {[...Array(2)].map((album, i) => (
                        <div key={i}>
                            <SkeletonItemCardVariant1 />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArtistAlbumsLoading
