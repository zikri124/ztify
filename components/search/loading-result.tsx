import { SkeletonItemCardVariant2 } from "../ui/spotify-item-card"

const LoadingResult = () => {
    return (
        <>
            <div className="space-y-6">
                {[...Array(4)].map((item, i) => (
                    <div key={i}>
                        <SkeletonItemCardVariant2 />
                    </div>
                ))}
            </div>
        </>
    )
}

export default LoadingResult
