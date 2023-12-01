import { Skeleton } from "@/components/ui/skeleton"

const ArtistBannerLoading = () => {
    return (
        <div className="w-full aspect-[4/3] relative">
            <Skeleton className="w-full aspect-[4/3] object-cover rounded-none" />
        </div>
    )
}

export default ArtistBannerLoading
