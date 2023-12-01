import Image from "next/image"
import Link from "next/link"
import formatArtistsNameDisplay from "../format-artist-display-name"
import { Artist } from "@/types/top-tracks"
import { Skeleton } from "./skeleton"

type Props = {
    className: string,
    imageUrl: string,
    title: string,
    hrefLink: string,
    type: string,
    artists: Artist[]
}

export const ItemCardVariant1 = ({ className, imageUrl, title, hrefLink, artists, type }: Props) => {
    const itemWidth = 160

    return (
        <Link className={className} href={hrefLink}>
            <Image height={itemWidth} width={itemWidth} alt="artist-photo" src={imageUrl} className="aspect-square relative object-cover" />
            <h4 className="font-bold mt-2 line-clamp-1 break-word" style={{ width: `${itemWidth}px`, height: 'auto' }} >{title}</h4>
            <p className="line-clamp-1 text-sm" style={{ width: `${itemWidth}px` }}>
                {type} &#8226; {formatArtistsNameDisplay(artists)}
            </p>
        </Link>
    )
}

export const SkeletonItemCardVariant1 = () => {
    const itemWidth = 160
    return (
        <div>
            <Skeleton className="aspect-square relative object-cover" style={{ width: `${itemWidth}px` }} />
            <Skeleton className="w-full h-4 my-4" />
            <Skeleton className="w-1/2 h-2" />
        </div>
    )
}

export const ItemCardVariant2 = ({ className, imageUrl, title, hrefLink, artists, type }: Props) => {
    const itemWidth = 64

    return (
        <Link className={`${className} flex gap-4`} href={hrefLink}>
            <Image height={itemWidth} width={itemWidth} alt="artist-photo" src={imageUrl} className="aspect-square relative object-cover" />
            <div className="flex-grow space-y-1 mt-4">
                <h4 className="font-bold line-clamp-1 mb-4">{title}</h4>
                <p className="line-clamp-1 text-sm" >
                    {type} &#8226; {formatArtistsNameDisplay(artists)}
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
            <div className="flex-grow space-y-1">
                <Skeleton className="w-full h-4 mb-4" />
                <Skeleton className="w-1/2 h-2" />
            </div>
        </div>
    )
}
