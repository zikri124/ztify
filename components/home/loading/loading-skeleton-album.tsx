import { Skeleton } from "@/components/ui/skeleton"
import { SkeletonItemCardVariant1 } from "@/components/ui/spotify-item-card"

const LoadingSkeletonAlbum = () => {
    return (
        <div className="w-full overflow-x-auto pb-2">
            <div className="w-max flex gap-4">
                <SkeletonItemCardVariant1 />
                <SkeletonItemCardVariant1 />
            </div>
        </div>
    )
}

export default LoadingSkeletonAlbum
