import { Skeleton } from "../ui/skeleton"

const LoadingResult = () => {
    return (
        <>
            <div className="space-y-6">
                {[...Array(4)].map((item, i) => (
                    <div className="flex gap-4" key={i}>
                        <Skeleton className="aspect-square w-16 h-16 flex-0 " />
                        <div className="flex-grow space-y-4">
                            <Skeleton className="w-full h-8" />
                            <Skeleton className="w-full h-4" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default LoadingResult
