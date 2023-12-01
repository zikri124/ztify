import Image from "next/image"
import Link from "next/link"

type Props = {
    className: string,
    imageUrl: string,
    name: string,
    hrefLink: string
}

const itemWidth = 160

export const ArtistItemCard = ({ className, imageUrl, name, hrefLink }: Props) => {
    return (
        <Link className={className} href={hrefLink}>
            <Image height={itemWidth} width={itemWidth} alt="artist-photo" src={imageUrl} className="rounded-full aspect-square relative object-cover" />
            <h4 className="font-bold text-center mt-2 line-clamp-1 break-word" style={{ width: `${itemWidth}px` }}>{name}</h4>
        </Link>
    )
}
