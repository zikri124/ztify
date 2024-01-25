'use client'
import Carousel from "../carousel"
import { SwiperSlide } from "swiper/react"
import { ArtistCardVariant1 } from "../spotify-item-card"
import ArtistData from "@/types/artist/artist-data"

const ArtistsCarousel = ({ artists }: { artists: ArtistData[] }) => {
    return (
        <Carousel>
            <div className='w-max gap-4'>
                {artists.map((artist, i) => (
                    <SwiperSlide key={i}>
                        <ArtistCardVariant1 className={""} imageUrl={artist.images[0].url} hrefLink={`/artist/${artist.id}`} artist={artist.name} />
                    </SwiperSlide>
                ))}
            </div>
        </Carousel>
    )
}

export default ArtistsCarousel