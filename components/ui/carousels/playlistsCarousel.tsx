'use client'
import Carousel from "../carousel"
import { SwiperSlide } from "swiper/react"
import Image from "next/image"
import { Playlist } from "@/types/playlist"
import { Link } from "lucide-react"
import { CommonCard } from "../spotify-item-card"

const PlaylistsCarousel = ({ data }: { data: Playlist[] }) => {
    return (
        <Carousel>
            <div className='w-max gap-4'>
                {data && (
                    <div>
                        {data.map((item, i) => (
                            <SwiperSlide key={i}>
                                {/* <Link href={"/"}>
                                    <Image height={160} width={160} alt="artist-photo" src={item.images[0].url} className="aspect-square relative object-cover" />
                                    <h4 className="mt-2 line-clamp-2 break-word" style={{ width: `${160}px` }}>{item.description}</h4>
                                </Link> */}
                                <CommonCard className={""} imageUrl={item.images[0].url} title={item.description} hrefLink={"#"} />
                            </SwiperSlide>
                        ))}
                    </div>
                )}
            </div>
        </Carousel>

    )
}

export default PlaylistsCarousel