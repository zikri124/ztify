'use client'
import Carousel from "../carousel"
import { SwiperSlide } from "swiper/react"
import formatArtistsNameDisplay from "@/utils/format-artist-display-name"
import { ItemCardVariant1 } from "../spotify-item-card"
import { Track } from "@/types/track"

const TracksCarousel = ({ data }: { data: Track[] }) => {
    return (
        <Carousel>
            <div className='w-max gap-4'>
                {data && (
                    <div>
                        {data.map((item, i) => (
                            <SwiperSlide key={i}>
                                <ItemCardVariant1 className="" imageUrl={item.album.images[1].url} title={item.name} hrefLink="#" artist={formatArtistsNameDisplay(item.artists)} type="Album" />
                            </SwiperSlide>
                        ))}
                    </div>
                )}
            </div>
        </Carousel>

    )
}

export default TracksCarousel