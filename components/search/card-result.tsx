import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"

type Props = {
    imageUrl: string,
    name: string,
    url: string,
    children: React.ReactNode,
    circleImg: boolean
}

const CardResult = ({ imageUrl, name, url, children, circleImg }: Props) => {
    return (
        <div>
            <Link href={url}>
                <div className="flex gap-4">
                    <Image alt="result-image" src={imageUrl} width={64} height={64} className={clsx(
                        "aspect-square relative object-cover",
                        {
                            'rounded-full': circleImg === true
                        }
                    )} />
                    <div className="flex-grow space-y-1">
                        <h4 className="font-bold">{name}</h4>
                        <p className="text-sm">{children}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardResult
