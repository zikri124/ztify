'use client'

import { Swiper } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

export default ({ children }: { children: React.ReactNode }) => {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={4}
            slidesPerGroup={2}
            navigation= {{
                enabled: true
            }}
            className='w-full'
            breakpoints={{
                0: {
                    slidesPerView: 1.5,
                    navigation: {
                        enabled: false,
                    }
                },
                360: {
                    slidesPerView: 1.8,
                    navigation: {
                        enabled: false,
                    }
                },
                480: {
                    slidesPerView: 2.5,
                    navigation: {
                        enabled: false,
                    }
                },
                640: {
                    slidesPerView: 3.25,
                    navigation: {
                        enabled: false,
                    }
                },
                768: {
                    slidesPerView: 2.5,
                    navigation: {
                        enabled: true,
                    }
                },
                860: {
                    slidesPerView: 3.2,
                    navigation: {
                        enabled: true,
                    }
                },
                956: {
                    slidesPerView: 3.5,
                },
                1024: {
                    slidesPerView: 4.2,
                },
                1280: {
                    slidesPerView: 6.5,
                },
                1536: {
                    slidesPerView: 8.5,
                }
            }}
        >
            {children}
        </Swiper>
    )
}
