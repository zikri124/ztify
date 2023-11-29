import { Skeleton } from "@/components/ui/skeleton"

const LoadingSkeletonAlbum = () => {
    return (
        <div className="w-full overflow-x-auto pb-2">
            <div className="w-max flex gap-4">
                <div style={{ width: "180px" }} className="space-y-2">
                    <Skeleton className="aspect-square rounded-none w-full" />
                    <Skeleton className="w-full h-2" />
                    <Skeleton className="w-1/2 h-2" />
                </div>
                <div style={{ width: "180px" }} className="space-y-2">
                    <Skeleton className="aspect-square rounded-none w-full" />
                    <Skeleton className="w-full h-2" />
                    <Skeleton className="w-1/2 h-2" />
                </div>
            </div>
        </div>
    )
}

export default LoadingSkeletonAlbum
