'use client'
import Carousel from "../carousel"
import { SwiperSlide } from "swiper/react"
import { Playlist } from "@/types/playlist"
import { CommonCard } from "../spotify-item-card"
import { upperFirstLetter } from "@/utils/string-formatter"

const PlaylistsCarousel = ({ data }: { data: Playlist[] }) => {    
    return (
        <Carousel>
            <div className='w-max gap-4'>
                {data && (
                    <div>
                        {data.map((item, i) => (
                            <SwiperSlide key={i}>
                                <CommonCard className={""} imageUrl={item.images[0].url} title={upperFirstLetter(item.name)} subtitle={item.description} hrefLink={`/playlist/${item.id}`} />
                            </SwiperSlide>
                        ))}
                    </div>
                )}
            </div>
        </Carousel>
    )
}

export default PlaylistsCarousel