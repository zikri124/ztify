import { Skeleton } from "@/components/ui/skeleton"

const ArtistBannerLoading = () => {
    return (
        <div className="w-full relative flex flex-col md:flex-row justify-items-center items-center gap-12 py-4 md:py-8 px-4">
            <Skeleton className="w-full h-auto md:w-[22rem] aspect-square rounded-none" />
            <div className="w-full">
                <Skeleton className="w-1/6 h-4 mb-4" />
                <Skeleton className="w-1/3 h-12" />
            </div>
        </div>
    )
}

export default ArtistBannerLoading
