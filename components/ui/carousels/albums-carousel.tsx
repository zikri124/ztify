'use client'
import Carousel from "../carousel"
import { SwiperSlide } from "swiper/react"
import { Album } from "@/types/album"
import formatArtistsNameDisplay from "@/utils/format-artist-display-name"
import { ItemCardVariant1 } from "../spotify-item-card"

const AlbumsCarousel = ({ data }: { data: Album[] }) => {
    return (
        <Carousel>
            <div className='w-max gap-4'>
                {data && (
                    <div>
                        {data.map((item, i) => (
                            <SwiperSlide key={i}>
                                <ItemCardVariant1 className="" imageUrl={item.images[1].url} title={item.name} hrefLink="#" subtitle={formatArtistsNameDisplay(item.artists)} type="Album" />
                            </SwiperSlide>
                        ))}
                    </div>
                )}
            </div>
        </Carousel>

    )
}

export default AlbumsCarousel