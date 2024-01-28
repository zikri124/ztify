import Image from "next/image"
import Link from "next/link"
import { Skeleton } from "./skeleton"

type CardProps = {
    className: string,
    imageUrl: string,
    title: string,
    hrefLink: string,
    type: string,
    subtitle: string
}

type ArtsitCardProps = {
    className: string,
    imageUrl: string,
    hrefLink: string,
    artist: string
}

export const CommonCard = ({ className, imageUrl, title, hrefLink, subtitle }: { className: string, imageUrl: string, title: string, hrefLink: string, subtitle: string }) => {
    const itemWidth = 160

    return (
        <Link href={hrefLink} className={className}>
            <Image height={itemWidth} width={itemWidth} alt="artist-photo" src={imageUrl} className="aspect-square relative object-cover" />
            <h4 className="font-bold mt-2 line-clamp-1 break-all" style={{ width: `${itemWidth}px` }}>{title}</h4>
            <p className="line-clamp-2 text-sm break-all" style={{ width: `${itemWidth}px` }}>
                {subtitle}
            </p>
        </Link>
    )
}

export const ItemCardVariant1 = ({ className, imageUrl, title, hrefLink, subtitle, type }: CardProps) => {
    const itemWidth = 160

    return (
        <Link className={className} href={hrefLink}>
            <Image height={itemWidth} width={itemWidth} alt="artist-photo" src={imageUrl} className="aspect-square relative object-cover" />
            <h4 className="font-bold mt-2 line-clamp-1 break-all" style={{ width: `${itemWidth}px`, height: 'auto' }} >{title}</h4>
            <p className="line-clamp-1 text-sm break-all" style={{ width: `${itemWidth}px` }}>
                {subtitle}
            </p>
        </Link>
    )
}

export const SkeletonItemCardVariant1 = () => {
    const itemWidth = 160
    return (
        <div style={{ width: `${itemWidth}px` }} className="space-y-2">
            <Skeleton className="aspect-square rounded-none w-full" />
            <Skeleton className="w-full h-2" />
            <Skeleton className="w-1/2 h-2" />
        </div>
    )
}

export const ItemCardVariant2 = ({ className, imageUrl, title, hrefLink, subtitle, type }: CardProps) => {
    const itemWidth = 48

    return (
        <Link className={`${className} flex gap-4`} href={hrefLink}>
            <Image height={itemWidth} width={itemWidth} alt="artist-photo" src={imageUrl} className="aspect-square relative object-cover flex-0" />
            <div className="flex-grow flex flex-col gap-1 justify-center">
                <h4 className="font-bold line-clamp-1 break-all">{title}</h4>
                <p className="line-clamp-1 text-sm break-all" >
                    {subtitle}
                </p>
            </div>
        </Link>
    )
}

export const SkeletonItemCardVariant2 = () => {
    const itemWidth = 48
    return (
        <div className="flex gap-4">
            <Skeleton className="aspect-square relative object-cover" style={{ height: `${itemWidth}px` }} />
            <div className="flex-grow flex flex-col gap-1 justify-center">
                <Skeleton className="w-full h-4 mb-4" />
                <Skeleton className="w-1/2 h-4" />
            </div>
        </div>
    )
}

export const ArtistCardVariant1 = ({ className, imageUrl, hrefLink, artist }: ArtsitCardProps) => {
    const itemWidth = 160
    return (
        <Link className={className} href={hrefLink}>
            <Image height={itemWidth} width={itemWidth} alt="artist-photo" src={imageUrl} className="rounded-full aspect-square relative object-cover" />
            <h4 className="font-bold text-center mt-2 line-clamp-1 break-all" style={{ width: `${itemWidth}px` }}>{artist}</h4>
        </Link>
    )
}

export const SkeletonArtistCardVariant1 = () => {
    const itemWidth = 160
    return (
        <div style={{ width: `${itemWidth}px`, height: "auto" }} className="space-y-2">
            <Skeleton className="aspect-square rounded-none w-full" />
            <Skeleton className="w-full h-2" />
            <Skeleton className="w-1/2 h-2" />
        </div>
    )
}

export const ArtistCardVariant2 = ({ className, imageUrl, hrefLink, artist }: ArtsitCardProps) => {
    const itemWidth = 64
    return (
        <Link className={`${className} flex gap-4`} href={hrefLink}>
            <Image height={itemWidth} width={itemWidth} alt="artist-photo" src={imageUrl} className="aspect-square rounded-full relative object-cover flex-0" />
            <div className="flex-grow flex flex-col gap-1 justify-center">
                <h4 className="font-bold line-clamp-1 break-all">{artist}</h4>
                <p className="line-clamp-1 text-sm break-all" >
                    Artist
                </p>
            </div>
        </Link>
    )
}

export const SkeletonArtistCardVariant2 = () => {
    return SkeletonItemCardVariant2
}
