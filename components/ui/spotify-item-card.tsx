import Image from "next/image"
import Link from "next/link"
import { Skeleton } from "./skeleton"

type CardProps = {
    className: string,
    imageUrl: string,
    title: string,
    hrefLink: string,
    type: string,
    artist: string
}

type ArtsitCardProps = {
    className: string,
    imageUrl: string,
    hrefLink: string,
    artist: string
}

export const ItemCardVariant1 = ({ className, imageUrl, title, hrefLink, artist, type }: CardProps) => {
    const itemWidth = 160

    return (
        <Link className={className} href={hrefLink}>
            <Image height={itemWidth} width={itemWidth} alt="artist-photo" src={imageUrl} className="aspect-square relative object-cover" />
            <h4 className="font-bold mt-2 line-clamp-1 break-word" style={{ width: `${itemWidth}px`, height: 'auto' }} >{title}</h4>
            <p className="line-clamp-1 text-sm" style={{ width: `${itemWidth}px` }}>
                {type} &#8226; {artist}
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

export const ItemCardVariant2 = ({ className, imageUrl, title, hrefLink, artist, type }: CardProps) => {
    const itemWidth = 64

    return (
        <Link className={`${className} flex gap-4`} href={hrefLink}>
            <Image height={itemWidth} width={itemWidth} alt="artist-photo" src={imageUrl} className="aspect-square relative object-cover flex-0" />
            <div className="flex-grow flex flex-col gap-1 justify-center">
                <h4 className="font-bold line-clamp-1">{title}</h4>
                <p className="line-clamp-1 text-sm" >
                    {type} &#8226; {artist}
                </p>
            </div>
        </Link>
    )
}

export const SkeletonItemCardVariant2 = () => {
    const itemWidth = 64
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
            <h4 className="font-bold text-center mt-2 line-clamp-1 break-word" style={{ width: `${itemWidth}px` }}>{artist}</h4>
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
                <h4 className="font-bold line-clamp-1">{artist}</h4>
                <p className="line-clamp-1 text-sm" >
                    Artist
                </p>
            </div>
        </Link>
    )
}

export const SkeletonArtistCardVariant2 = () => {
    return SkeletonItemCardVariant2
}
